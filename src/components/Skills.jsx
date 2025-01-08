import React from 'react'
import react from '../assets/react.png'
import express from '../assets/node.png'
import node from '../assets/nodejs.png'
import bootstrap from '../assets/Bootstrap.png'
import tailwind from '../assets/tailwind.png'
import html from '../assets/HTML5.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import python from '../assets/python.png'
import c from '../assets/c++.png'
import sql from '../assets/sql.png'
import mongo from '../assets/mongo.png'
import netlify from '../assets/netlify.png'
import github from '../assets/github.jpg'

import './skills.css'

const Skills = () => {
    return (
        <section id='skills'>

        <div style={{backgroundColor:'#5605A4',height:'600px',display:'',alignItems:'center',justifyContent:'center'}}>
            <h1 className='mt-8 text-center text-3xl text-white font-bold'>My Skills</h1>
          <div className='flex items-center justify-center'>
            <div className="bigbox mt-4"  >
                <div className="t">
                <div className="first" >
                    <div className="react" >
                        <img src={react} alt="" className='image' />
                        React
                    </div>
                    <div className="react">
                        <img src={express} alt=""  className='image' /> 
                        Express JS
                    </div>
                    <div className="react">
                        <img src={node} alt=""  className='image' /> 
                        Node JS
                    </div>
                    <div className="react">
                        <img src={js} alt=""  className='image' /> 
                        Javascript
                    </div>
                </div>
                <div className="first" >


                    <div className="react">
                        <img src={html} alt=""  className='image' /> 
                        HTML
                    </div>
                    <div className="react">
                        <img src={css} alt=""  className='image' /> 
                        CSS
                    </div>
                    <div className="react">
                        <img src={bootstrap} alt=""  className='bootstrap ' /> 
                        Bootstrap
                    </div>
                    <div className="react">
                        <img src={tailwind} alt=""  className='tailwind '  /> 
                        Tailwind
                    </div>
                </div>
                <div className="first" >
                <div className="react">
                    <img src={python} alt=""  className='image'/> 
                   Python
                </div>
                <div className="react">
                    <img src={c} alt="" className='image' /> 
                    C++
                </div>
                <div className="react">
                    <img src={sql} alt="" className='image' /> 
                    MySQL
                </div> <div className="react">
                    <img src={mongo} alt="" className='image' /> 
                   MongoDb
                </div>
                </div>
                <div className="first" >
                <div className="react">
                    <img src={netlify} alt=""  className='image'/> 
                   Netlify
                </div>
                <div className="react">
                    <img src={github} alt="" className='image' /> 
                    Github
                </div>
              
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Skills
