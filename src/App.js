/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { Reset } from 'styled-reset'
import {  GSCommon } from "./styles/common";
import Header from "./component/HeaderLayout/Header/Header";
import LoginContainer from "./component/LoginLayout/LoginContainer/LoginContainer";
import NavContainer from "./component/NavLayout/NavContainer/NavContainer";
import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed/Feed";
import TimeLine from "./pages/TimeLine/TimeLine";
import Review from "./pages/Review/Review";
import Order from "./pages/Order/Order";
import Save from "./pages/Save/Save";

function App() {
  return (
    <>
      <Reset/>
      <Global styles={GSCommon}/>
      <Routes>
        <Route path='/' element={ <Feed /> }/>
        <Route path='/feed' element={ <Feed /> }/>
        <Route path='/timeline' element={ <TimeLine /> }/>
        <Route path='/review' element={ <Review /> }/>
        <Route path='/order' element={ <Order /> }/>
        <Route path='/save' element={ <Save /> }/>
      </Routes>
    </>
  );
}

export default App;
