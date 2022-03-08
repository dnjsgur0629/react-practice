import React from "react";

function formatDate(date) {
  return date.toLocaleDateString();
}

//추출된 Avatar
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

//추출된 UserInfo
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    //이 컴포넌트는 구성요소들이 모두 중첩 구조로 이루어져 있어서 변경하기 어려울 수 있으며, 각 구성요소를 개별적으로 재사용하기도 힘듭니다./
    // Avatar와 UserInfo를 추출해서 사용해봅시다.
    /*<div className="Comment">
          <div className="UserInfo">
              <img
                  className="Avatar"
                  src={props.author.avatarUrl}
                  alt={props.author.name}
              />
              <div className="UserInfo-name">{props.author.name}</div>
          </div>
          <div className="Comment-text">{props.text}</div>
          <div className="Comment-date">{formatDate(props.date)}</div>
        </div>*/
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

export default function Extraction(props) {
  return (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  );
}
