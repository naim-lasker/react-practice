import React from "react";
import {
    BrowserRouter,
    Routes as Switch,
    Route,
} from "react-router-dom"
import Home from 'views/home'
import About from 'views/about'
import Posts from 'views/posts'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/posts' element={<Posts />} />
            </Switch>
        </BrowserRouter>
    )
}
