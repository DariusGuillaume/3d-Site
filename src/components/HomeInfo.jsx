import React from 'react';
import {Link} from 'react-router-dom';
import {arrow} from '../parts/icons';

const InfoBox = ({ text, link,btnText }) => (
  <div className="info-box">
    <p className = "font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
  );

const renderContent = {
  1: (<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-green py-4 px-8 text-white mx-5"> 
        Hi, I am <span className="font-semibold"> Darius</span> 
        <br/> Software Engineer, Full-Stack Developer
      </h1>),
  2: (<InfoBox 
      text = "Leveraged industry-leading technologies to elevate user experiences and optimize product functionality"
      link = "/about"
      btnText = "Learn More"
  />
    
    ),
  3: (<InfoBox 
    text = " Whether you have an exciting project in need of completion or seek a skilled developer, I'm just a message away."
    link = "/contact"
    btnText = "Available for select freelance opportunities, Let's Connect!"
/>),
  4: (<InfoBox 
    text = "Worked on developing hybrid mobile apps and cross-platform solutions"
    link = "/projects"
    btnText = "Visit Projects"
/>),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage || null];
};

export default HomeInfo;
