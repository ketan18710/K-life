import React,{useState,useEffect} from 'react'
import './style.scss'
function index(props) {
  const [file,setFile] = useState(null);
  const [validationObj,setValidationObj] = useState(null);
  const [media, setMedia] = useState(null)
  const onChangeMediaFunc = (e)=>{
    const selectedFile = e.target.files[0];
    setMedia({"image" : selectedFile});
  }
  const submitMediaFormFunc = ()=>{
    const formData = new FormData()
    formData.append('image',media.image)
    formData.append('group',PREVIEW_DESIGN)
    console.log(formData)
    props.storeMedia(dataToSend)
}


  
  return (
    <input type="file" name="input_file" id="fileInput"/>
  )
}
export default index
