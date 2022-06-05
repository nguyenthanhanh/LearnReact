import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from 'react';
import TodoFeature from './features/Todo';
import FeatureProduct from './features/Product';
import ColorBox from './features/ColorBox';
import Count from './features/Count';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Router } from 'react-router-dom';
import NotFound from './components/NotFound';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    }
    fetchProducts();
  }, []);
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
      header
      <p><Link to="/todo">ToDo</Link></p>
      <p><Link to="/colorbox">ColorBox</Link></p>
      <p><NavLink to="/todo" >ToDos</NavLink></p>
      <p><NavLink to="/colorbox" >ColorBoxs</NavLink></p>
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Route path= "/" component={Count} exact ></Route>
        <Route path="/todo" component={TodoFeature} />
        <Route path="/colorbox" component={ColorBox} />
        <Route component={NotFound}></Route>
      </Switch>
      <Route path="/spec" component={TodoFeature} />
      <Route path="/spec" component={ColorBox} />
      footer
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
