import React from 'react'
import {skills} from '../constants'
import CTA from '../components/CTA'; 

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="pine-green-text font font-semibold drop-shadow">
          Darius Guillaume</span>
      </h1>
      <div className='mt flex flex-col gap-3 text-slate-500'> 
        <p> 
          I'm a software engineer based in New York City. I specialize in building high-quality websites and applications. I'm passionate about creating user-friendly experiences and solving complex problems. I'm always looking for opportunities to work on exciting projects with new people.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My Skills
        </h3>
        <div className="flex flex-col gap-3 text-slate-500">
          <p>
            I have experience working with both front-end and back-end technologies. I'm comfortable working with JavaScript, React, Node.js, and MongoDB. I also have experience with Java, Python, and Go. I'm always learning new technologies and looking for ways to improve my skills.
          </p>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className='block-container w-20 h-20'> 
                <div className='=btn-back rounded-xl '/>
                <div className='btn-front rounded-xl flex justify-center '
                items-center> 
                  <img 
                  src={skill.imageUrl} 
                  alt={skill.name} 
                  className="w-1/2 h-1/2 object-contain"/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CTA/>
      </div>
    </section>
  )
}
 
export default About;
