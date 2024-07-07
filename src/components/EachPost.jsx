import React from 'react'
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const EachPost = (props) => {
const dispatch = useDispatch()
const {eachPost} = props
const {id, name, content, image} = eachPost
const onClickDel = () => {
    dispatch({type: "delete", payload: {id: id}})
}

  return (
    <li className='EachPostCon'>
        <div className='topSection'>
            <div className='leftPartCon'>
                <p className='profileRound'>{name[0]}</p>
                <div className='profileDetailsCon'> 
                    <p className='userName'>{name}</p>
                    <p className='ActiveCss'>Active</p>
                </div>
            </div>
            <div className='rightPartCon'>
                <Link className='editBtnBox' to='/editpost' state={eachPost}>
                    <MdOutlineModeEdit size={25} />
                </Link>

                <button type='button' className='editBtnBox' onClick={onClickDel} >
                    <MdDelete size={25}  />
                </button>
            </div>
        </div>
        <div className='imageSection'>
            <img src={image} alt={name} className='postImg'/>
        </div>
        <div className='contentSection'>
            <p>{content}</p>
        </div>
    </li>
  )
}

export default EachPost