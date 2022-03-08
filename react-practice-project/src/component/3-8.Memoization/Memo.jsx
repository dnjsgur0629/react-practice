import React, { useEffect, useState } from "react";
import Comments from "./Comments";

const commentList = [
  { title: "comment1", content: "message1", likes: 1 },
  { title: "comment2", content: "message2", likes: 1 },
  { title: "comment3", content: "message3", likes: 1 },
];

function Memo() {
  const [comments, setComments] = useState(commentList);

  //1초마다 comment가 1개씩 늘어나도록 함
  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ...prevComments,
        {
          title: `comment${prevComments.length + 1}`,
          content: `message${prevComments.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Comments commentList={comments} />;
}

export default Memo;
