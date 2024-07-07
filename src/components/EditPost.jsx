import React, { useState } from 'react'
import { Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'
import { useDispatch } from 'react-redux'


const EditPost = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const {name, content, id, image} = location.state
    const [oldName, setOldName] = useState(name)
    const [oldContent, setOldContent] = useState(content)
    const [oldImage, setOldImage] = useState(image)
    const onChangeImage = (e) => {
        const data = new FileReader()
    data.addEventListener('load', ()=>{
        setOldImage(data.result)
    })
    data.readAsDataURL(e.target.files[0])
    }

    const onUpdateFirm = (e) => {
        e.preventDefault()
        dispatch({type: "update", payload:{
            id,
            name: oldName,
            content: oldContent,
            image: oldImage
          }});
         
         alert('Post Updated Successfully')
         navigate('/allposts')
    }

  return (
    <div className='allPostsCon'>
        <Header />
        <form id='createPostFrom' className='addPostCon' onSubmit={onUpdateFirm}>
            <h2>Update Post</h2>
            <label className='name'>USERNAME</label>
            <input type='text' name='name' id='name' value={oldName} onChange={(e) => setOldName(e.target.value)} placeholder='Enter Username'/>
            <label className='name'>CONTENT</label>
            <input type='text' name='name' id='name' value={oldContent} onChange={(e) => setOldContent(e.target.value)} placeholder='Enter Content'/>
            <input type='file' accept='image/png image/jpeg' onChange={onChangeImage}  id='imageUploadsec'/>
            <img src={oldImage} alt='image'  width={100} height={100} />
            <button type='Submit' id='submitBtn'>Update</button>
        </form>
    </div>
  )
}

export default EditPost