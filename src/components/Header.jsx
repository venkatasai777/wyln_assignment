import React from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
    const onClickHomeBtn = () => {
            navigate('/')
    }
  return (
    // mobile 
    <>
    <div className='headerCon-mobile'>
        <div>
            <h1>Wyln</h1>
        </div>
        <div>
            <ul className='menuList'>
                <li className='home' onClick={onClickHomeBtn}>
                    Home
                </li>
                <li className='home'>
                    <Link to='/allposts' className='linkcss'>All Posts</Link>
                </li>
                <li className='userProfile'>w</li>
            </ul>
        </div>
    </div> 

    <div className='headerCon-pc'>
        <div>
            <h1>
                <Link to='/' className='logo'>
                    Wyln
                </Link>
            </h1>
        </div>
        <div>
            <ul className='menuList'>
                <li className='home' onClick={onClickHomeBtn}>
                    Home
                </li>
                <li className='home'>
                    <Link to='/allposts' className='linkcss'>All Posts</Link>
                </li>
                <li className='userProfile'>w</li>
            </ul>
        </div>
    </div>
</>
  )
}

export default Header