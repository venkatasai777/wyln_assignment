import React , {useState} from 'react'
import {v4 as uuid} from 'uuid'
import Header from './Header'
import '../App.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const AddPost = () => {

  const navigate = useNavigate()
  let dispatch = useDispatch()
  const [image, setImage] = useState()
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const onChangeImage = (e) => {
    const data = new FileReader()
    data.addEventListener('load', ()=>{
        setImage(data.result)
    })
    data.readAsDataURL(e.target.files[0])
}

  const onSubmitAddPost = (e) => {
    console.log('form called')
      e.preventDefault()
      console.log(name, content, image)
      dispatch({type: "create", payload:{
        id: uuid(),
        name,
        content,
        image
      }});
     setImage('')
     setName('')
     setContent('')
     alert('Post Created Successfully')
     navigate('/allposts')
  }

  return (
    <div className='allPostsCon'>
        <Header />
        <form id='createPostFrom' className='addPostCon' onSubmit={onSubmitAddPost}>
            <h2>Create Post</h2>
            <label className='name'>USERNAME</label>
            <input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Username'/>
            <label className='name'>CONTENT</label>
            <input type='text' name='name' id='name' value={content} onChange={(e) => setContent(e.target.value)} placeholder='Enter Content'/>
            <input type='file' accept='image/png image/jpeg' onChange={onChangeImage}  id='imageUploadsec'/>
            <img src={image} alt='image'  width={100} height={100} />
            <button type='Submit' id='submitBtn'>Add Post</button>
        </form>
    </div>
  )
}

export default AddPost