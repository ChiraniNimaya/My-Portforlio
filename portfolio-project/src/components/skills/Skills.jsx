import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <div className='skills-title'>
            <h1>Skills</h1>
            <div className='skills-content'>
                <div className='skills-para'>
                    <p>I possess a solid foundation in software engineering principles, with a strong grasp of object-oriented programming (OOP), design patterns, and algorithms. Over the past 2-3 years, I have gained hands-on experience in the software development industry, working extensively with Java and C++, two of the most in-demand programming languages. My practical exposure has strengthened my understanding of software architecture, system design, and efficient problem-solving techniques.</p>
                    <p>In addition to my professional experience, I have self-learned modern front-end technologies such as JavaScript, HTML, CSS, and the React framework, applying them effectively in personal and academic projects. I am currently pursuing a Master’s in Advanced Software Engineering, where I continue to deepen my expertise through research-driven coursework and hands-on learning projects that explore advanced concepts in software design and development.</p>
                </div>
                <div className='skills-list'>
                    <div className='skill'><p>C++</p> <hr style={{width:"80%"}}/></div>
                    <div className='skill'><p>Java</p> <hr style={{width:"50%"}}/></div>
                    <div className='skill'><p>C#</p> <hr style={{width:"50%"}}/></div>
                    <div className='skill'><p>React</p> <hr style={{width:"40%"}}/></div>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default Skills