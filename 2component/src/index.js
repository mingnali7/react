import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// function tick(){
//   const element = (
//     <div>
//       <h1>Hellow World</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,document.getElementById('root')
//   )
// }

// setInterval(tick,1000);

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root'),
//     console.log('rendered')
//   )
// }

// setInterval(tick, 1000);

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { wow: new Date() };
//   }

//   componentDidMount() {
//     this.timer = setInterval(
//       () => this.tick(),
//       1000
//     );
//     console.log("ticking")
//   }


//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }

//   tick() {
//     this.setState({
//       wow: new Date()
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <h2>It is {this.state.wow.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root'),
// )



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wow: "meow" };
    this.array = ["meow", "woof", "yo"]
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
    console.log("ticking")
  }


  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    // let number = 
    this.setState({
      wow: this.array[Math.floor(Math.random() * this.array.length)]
    });
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>what am i doing?  {this.state.wow}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root'),
)