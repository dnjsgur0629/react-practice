import React, { memo } from "react";
import "./CommentItem.css";

function CommentItem({ title, content, likes }) {
  return (
    // className과 css파일로 스타일을 먹여보자
    <div className="CommentItem">
      <span>{title}</span>
      <br />
      <span>{content}</span>
      <br />
      <span>{likes}</span>
    </div>
  );
}
//react.memo 사용해서 memoization 활용
export default memo(CommentItem);
