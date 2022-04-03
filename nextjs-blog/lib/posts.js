import fs from 'fs' //파일 시스템을 가져옴
import path from 'path' // 이 project의 path를 가져올 수 있는 package
import matter from 'gray-matter'
import {remark} from "remark";
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), 'posts')  //cwd경로에 posts를 join (cwd:current directory)

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)  //폴더 안의 파일을 읽음
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')  //읽어온 파일 이름에서 확장자는 제거하고 id로 사용

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)  // 파일이름을 붙여서 완전한 path를 만듬
    const fileContents = fs.readFileSync(fullPath, 'utf8')  // utf-8로 파일을 읽음

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents) //matter로 데이터를 뽑아냄

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  // 뽑아온 데이터에는 date 정보가 있는데 그걸 가지고 최신의 것이 먼저 오도록 sorting
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  });
}

// 내가 가진 post(posts 폴더의 파일)들의 id를 배열형태로 반환
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  // getStaticPaths에서 아래와 같은 형태의 배열을 반환해야 동적라우팅을 구현할 수 있다.
  // 각 객체는 params key를 가져야하고 id key를 가진 객체를 포함해야합니다.
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

//id를 parameter로 받아서 그 id를 이름으로 하는 md파일을 읽어와 줍니다.
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // 추가된 부분
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}