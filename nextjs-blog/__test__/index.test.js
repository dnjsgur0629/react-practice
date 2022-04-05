// __tests__/index.test.jsx

import {render, screen} from '@testing-library/react'
import FirstPost from "../pages/posts/first-post";

describe('FirstPost', () => {
  it('renders a heading', () => {
    render(<FirstPost/>);

    const heading = screen.getByRole('heading', {
      name: /First Post/i,
    })

    expect(heading).toBeInTheDocument()
  })
})