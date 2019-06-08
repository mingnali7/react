import React from 'react';
import ReactDOM from 'react-dom';


function change() {
  const line =
    <p>What am I {action()}</p>

  ReactDOM.render(line, document.getElementById('root'));
}


function action() {
  let num = Math.floor(Math.random() * 4);
  let array = ["doing👀", "oh no😱", "meow😹", "wow💻"]
  let output = array[num];
  return output;
}

setInterval(change, 500);

