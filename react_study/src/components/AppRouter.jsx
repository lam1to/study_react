import React, { useContext } from 'react'
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {Routes, Route,Navigate } from "react-router-dom";
import PostIdPage from '../pages/PostIdPage';
import {privateRoutes, publicRoutes} from "../router/Routes.js"
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth,isLoading} = useContext(AuthContext);
    console.log(isAuth)
    if(isLoading){
        return <Loader/>
    }
  return (
    isAuth 
        ?<Routes>
            {privateRoutes.map(route => 
                <Route path={route.path} exact = {route.exact} Component = {route.component} />
            )}
            
            <Route path="*" element = {<Navigate to = '/posts'/>}/>
        </Routes>
        :<Routes>
            {publicRoutes.map(route => 
                <Route path={route.path} exact = {route.exact} Component = {route.component}/>
            )}

            <Route path="*" element = {<Navigate to = '/login'/>}/>
        </Routes>
  )
}

export default AppRouter;