import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Header />
        <div className='homeContainer'>
            <h1 className='welcomeHeading'>Welcome!</h1>
            <Link to='/allposts' className="clickHereCss">Click Here to see all posts</Link>
        </div>
    </>
  )
}

export default Home