import React from 'react'
import college from '../assets/college.png'
import school from '../assets/school.png'
import './skills.css'


const Education = () => {
  return (
    <section id='education'>

    <div style={{backgroundColor:'#e8ecfc',height:'500px'}}>   
    <h1 style={{textAlign:'center',color:'purple',fontSize:'30px',fontWeight:'bold',marginTop:'40px'}}>Education</h1>
   
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="ball">
      <div className="college " >
        <div>
        <img src={college} alt="" style={{objectFit:'cover',height:'168px',width:'200px',marginTop:'5px',marginLeft:"5px"}} />
        </div>
        <div className="info" >
        <h2 className='course' >Bachelor of Computer Applications</h2>
        <h3 className='clg' >DAV Centenary College | MDU</h3>
         <h4  className='complete'>2021-2024 | Completed</h4>
         </div>
      </div>
      <div className="college mb-4" >
        <div>
        <img src={school} alt=""  style={{objectFit:'cover',height:'168px',width:'200px',marginTop:'5px',marginLeft:"5px"}} />
        </div>
        <div className="info" >
        <h2 className='course'>HSC SCIENCE</h2>
        <h3 className='clg'>Government Model Sr. Sec. School | HBSE</h3>
         <h4 className='complete'>2019-2021 | Completed</h4>
         </div>
      </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Education
