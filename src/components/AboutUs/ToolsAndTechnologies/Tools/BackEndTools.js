import React from 'react';
import "./Tools.css";
import php_logo from "./Icons/Backend/PHP.svg";
import codeigniter_logo from "./Icons/Backend/codeigniter-svg.svg";
import laravel_logo from "./Icons/Backend/laravel.svg";
import nodejs_logo from "./Icons/Backend/nodejs-svg.svg";
import python_logo from "./Icons/Backend/python.svg";

const ToolCard = ({ logo, name }) => (
  <div className='ToolsCard'>
    <div className='T_cards'>
      <img src={logo} alt={`${name}_logo`} />
    </div>
    <p>{name}</p>
  </div>
);

function BackEndTools() {
  const backendToolsData = [
    { logo: php_logo, name: 'PHP' },
    { logo: codeigniter_logo, name: 'CodeIgniter' },
    { logo: laravel_logo, name: 'Laravel' },
    { logo: nodejs_logo, name: 'Node.js' },
    { logo: python_logo, name: 'Python' },
  ];

  return (
    <div className='ToolsAndTechnologiesContainer'>
      <div className='ToolsCardContainer'>
        {backendToolsData.map((tool, index) => (
          <ToolCard key={index} logo={tool.logo} name={tool.name} />
        ))}
      </div>
    </div>
  );
}

export default BackEndTools;
