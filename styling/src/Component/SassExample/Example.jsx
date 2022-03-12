import React from 'react';
import './Example.scss';

function Example() {
  return (
      <div>
        <p>Example</p>
        <p className="font">scss Example</p>
        <nav>
          <ul>
            <li>
              nav ul li
            </li>
            <li>
              <a>
                nav ul li a
              </a>
            </li>
          </ul>
        </nav>
        <ul>
          <li>
            nav ul li
          </li>
          <li>
            <a>
              nav ul li a
            </a>
          </li>
        </ul>
        <p className="base">used base example</p>
        <p className="inverse">inverse example</p>
        <p className="info">mixin info example</p>
        <p className="alert">mixin alert example</p>
        <p className="success">mixin success example</p>
        <p className="message">extend message example</p>
        <p className="success2">extend success2 example</p>
        <p className="error">extend error example</p>
        <p className="warning">extend warning example</p>
        <div className="square-av">square-av</div>
        <div className="circle-av">circle-av</div>
        <div className="sidebar">margin pow(4, 3)</div>
        <div className="gray">gray</div>
        <button className="button">button</button>
        <div className="pulse">pulse</div>
      </div>
  );
}

export default Example;