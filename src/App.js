import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';

function App() {
  // const name = 'Thành Anh';
  // const age = 18;
  // const isFemale = true;
  // const obj = {
  //   name: 'Nguyễn Thành Anh',
  //   age: '23'
  // }
  // const color = ['red', 'green', 'white', 'Đen', ''];
  return (
    <div className="App">
      <TodoFeature />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Thành Anh V3
    //     </p>
    //     <p>
    //       Hi {name} - {age} {isFemale}
    //     </p>
    //     {isFemale ? <p>Female</p> : <p>Male</p>}
    //     {isFemale && <p>Female</p>}
    //     {!isFemale && <p>Male</p>}

    //     {isFemale && (
    //       <>
    //         <p>Boy</p>
    //         <p>Boy</p>
    //         <p>Boy</p>
    //       </>
    //     )}

    //     {isFemale && (
    //       <React.Fragment>
    //         <p>Boy</p>
    //         <p>Boy</p>
    //         <p>Boy</p>
    //       </React.Fragment>
    //     )}
    //     {isFemale && (
    //       <div>
    //         <p>Boy</p>
    //         <p>Boy</p>
    //         <p>Boy</p>
    //       </div>
    //     )}

    //     <ul>
    //       {
    //         color.map((color, index) => (
    //           <li style={{ color }}>{index} {color}</li>
    //         ))
    //       }
    //     </ul>

    //     <p>{obj.name}</p>

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
