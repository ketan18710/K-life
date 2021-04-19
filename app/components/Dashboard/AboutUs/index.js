import React,{useState,useEffect} from 'react'
import TextEditor from 'components/TextEditor/index'
function AboutUs(props) {
  const {config,setConfig,save,saveData} = props
  const aboutUS = config.aboutUS
  const description = aboutUS &&  aboutUS.description 
  console.log(aboutUS,'aboutUsdescription')
  const [saveContentTrigger, setSaveContentTrigger] = useState(null)
  const setAboutUs = (val) => {
    setConfig({...config,aboutUS : {description : val}})
    window.localStorage.setItem('saveContent',true)
  }
  useEffect(() => {
    if(window.localStorage.getItem('saveContent')){
      saveData(config)
      window.localStorage.removeItem('saveContent')
    }
  }, [config])
  // useEffect(() => {
  //  alert(1)
  // }, [config])
  return (
    <div  className="Dashboard__aboutUs">
      <div className="actions">
        <button onClick={()=>setSaveContentTrigger(true)}> Save</button>
      </div>
      <TextEditor 
        content={description}
        setHtml = {(html)=>setAboutUs(html)}
        saveContentTrigger={saveContentTrigger}
      />
    </div>
  )
}

export default AboutUs
