import React, { useState } from 'react'
import Header from './Header'
import '../App.css'
import EachPost from './EachPost'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const AllPosts = () => {
let data = useSelector((store) => {
    return store.allPosts
})  
console.log(data)
return (
    <div className='allPostsCon'>
        <Header />
        <div className='allpostSecCon'>
            <p className='allPostsHead'>All Posts</p>
            <Link type='button' className='addNewPostBtn' to='/addpost'>
                + Create Post
            </Link>
        </div>
        <ul className='allPostsList'>
            {
                data.map(eachPost => <EachPost key={eachPost.id} eachPost={eachPost}/>)
            }
        </ul>
    </div>
  )
}

export default AllPosts