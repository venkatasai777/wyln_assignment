

import React from 'react'

const imageBase64 = () => {
    const [image, setImage] = useState()

  const onChangeImage = (e) => {
    const newFile = e.target.files[0]
    const data = new FileReader()
    data.addEventListener('load', ()=>{
        setImage(data.result)
    })
    data.readAsDataURL(e.target.files[0])
}
  return (
    <div>
        <input type='file' accept='image/png' onChange={onChangeImage} /><br/>
      <img src={image} alt='sai' width={20} height={20}/>
    </div>
  )
}

export default imageBase64