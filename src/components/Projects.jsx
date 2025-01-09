import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import foodie from '../assets/foodie.png'
import chat from '../assets/chat.jpg'
import todo from '../assets/todo.webp'
import tic from '../assets/tic.png'
import text from '../assets/text.jpg'
import weather from '../assets/weather.avif'
import ai from '../assets/ai.jpg'
import ems from '../assets/ems.png'
import note from '../assets/notebook.jpg'
import currency from '../assets/currency.png'
import news from '../assets/news.jpg'
import port from '../assets/port.png'


import '../index.css'
import './project.css'
function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slides on mobile
        },
      },
    ],  };
 
  return (
    <>
    <section id="project">
    <div className="hei" >
    <h1 className="my font-bold ">My Projects</h1>
    <div className='sec '>
      <div className="see  ">
      <Slider className="text-black" {...settings}>
        {data.map((d) => (
          <div key={d.name} className=" can ">
            <div className='sw '>
              <img src={d.img} alt="" className="ttt  w-full object-fill "/>
            </div>
            <hr className="hr" />

            <div className="het flex flex-col items-center justify-center gap-4">
              <p className="project-name text-xl text-center font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <div className="btn flex gap-5">
              <button  onClick={()=>{
                window.open(d.code, '_blank')
              } }className='view bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>View</button>

              <button onClick={()=>{
                 window.open(d.github, '_blank')
              }} className='view bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Code</button>
               </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
    </div>
    </section>
    </>
  );
}

const data = [
  {
    name: `Chat Application`,
    img: `${chat}`,
    review: `A real-time chat application using the MERN stack and Socket.io, enabling seamless communication with instant messaging. `,
    code:`https://chatapp-qy3f.onrender.com/login`,
    github:`https://github.com/SumitRaj18/ChatApp`
  },
  {
    name: `Food Delivery Application`,
    img: `${foodie}`,
    review: `MERN-based food delivery application with real-time order tracking and seamless user experience.`,
    code:`https://foodienationweb.netlify.app/`,
    github:`https://github.com/SumitRaj18/FoodieNation`
  },
 
  {
    name: `Notebook Application`,
    img: `${note}`,
    review: `A MERN Notebook application with features for secure note-taking, CRUD operations, and user authentication using JWT`,
    github:`https://github.com/SumitRaj18/INotebookApp`,
    code:`https://inoteswebapp.netlify.app`
  },
  {
    name: `Employee Managment System`,
    img: `${ems}`,
    review: `A React-based Employee Management System with features for adding, updating, and managing employee details.`,
    github:`https://github.com/SumitRaj18/Employee-Management-System`,
    code:`https://employeesmanagementsys.netlify.app/`
  },
  {
    name: `Personal Portfolio`,
    img: `${port}`,
    review: `A React-based Employee Management System with features for adding, updating, and managing employee details.`,
    github:`https://github.com/SumitRaj18/Personal-Portfolio`,
    code:`https://sumit-kumar-personal-portfolio.netlify.app/`
  },
  
  {
    name: `News App`,
    img:`${news}`,
    review: `A dynamic news app using React to display real-time news articles with filtering and search functionalities.`,
    github:`https://github.com/SumitRaj18/News-App`,
    code:`https://github.com/SumitRaj18/News-App`
  
  },
  {
    name: `Textutils`,
    img: `${text}`,
    review: `React-based text manipulation tool with features like text transformation, word/character count, and dark mode for an enhanced user experience`,
    github:`https://github.com/SumitRaj18/Textutils`,
    code:`https://github.com/SumitRaj18/Textutils`

  },
  {
    name: `Todo List`,
    img: `${todo}`,
    review:` To-Do List application using React, implementing CRUD operations with seamless user experience`,
    github: `https://github.com/SumitRaj18/Todo-list`,
    code:`https://sumitraj18.github.io/Todo-list/`
  },
 
  {
    name: `AI Image Generator`,
    img: `${ai}`,
    review: `AI Image Generator with React, enabling users to create images using AI-powered techniques.`,
    github:`https://github.com/SumitRaj18/AI-Image-Generator`,
    code:`https://sumitraj18.github.io/AI-Image-Generator/`
  },
  {
    name: `Weather Application`,
    img: `${weather}`,
    review: `A dynamic Weather App using JavaScript that fetches real-time weather data through APIs and provides user-friendly forecasts.`,
    github:`https://github.com/SumitRaj18/Weather-App`,
    code:`https://sumitraj18.github.io/Weather-App/`
  },
  {
    name: `Tic Tac Toe`,
    img: `${tic}`,
    review: `A dynamic Tic Tac Toe game using JavaScript, featuring an interactive user interface and two-player functionality.`,
    github:`https://github.com/SumitRaj18/Tic-Tac-Toe`,
    code:`https://sumitraj18.github.io/Tic-Tac-Toe/`
  },
  {
    name: `Currency Converter`,
    img: `${currency}`,
    review: `Currency Converter application using JavaScript, enabling real-time currency exchange rate conversions.`,
    github:`https://github.com/SumitRaj18/Currency-Converter`,
    code:`https://sumitraj18.github.io/Currency-Converter/`
  },
 
  
];

export default Projects;