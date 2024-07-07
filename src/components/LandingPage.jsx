import React from 'react'
import Header from './Header'
import '../App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AllPosts from './AllPosts'
import AddPost from './AddPost'
import EditPost from './EditPost'

const LandingPage = () => {
  return (
    <div className='appContainer'>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/allposts' Component={AllPosts} />
        <Route path='/addpost' Component={AddPost} />
        <Route path='/editpost' Component={EditPost} />
      </Routes>
    </div>
  )
}

export default LandingPage