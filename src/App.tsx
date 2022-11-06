import React, {Suspense, useContext, useState} from "react";
import './styles/index.scss'
import { Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

 const App = () => {
     const {theme, toggleTheme} = useTheme();
     const bool = true;
  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick = {toggleTheme}>TOGGLE</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Link to={'/home'}>На Главную</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync />}/>
                <Route path={'/'} element={<MainPageAsync />}/>
                <Route path={'/home'} element={<MainPageAsync />}/>
            </Routes>
        </Suspense>
    </div>
  )
}

export default App;
