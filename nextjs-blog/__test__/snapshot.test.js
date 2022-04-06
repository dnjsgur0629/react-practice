import {render} from '@testing-library/react'
import FirstPost from "../src/pages/posts/first-post";

it('renders homepage unchanged', () => {
  const {container} = render(<FirstPost/>)
  expect(container).toMatchSnapshot()
})