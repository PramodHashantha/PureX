import React from 'react';
import "./Tools.css";
import react_logo from "./Icons/FrontEnd/react-native.svg";
import angularjs_logo from "./Icons/FrontEnd/angularjs.svg";
import bootstrap_logo from "./Icons/FrontEnd/bootstrap.svg";
import css_logo from "./Icons/FrontEnd/css3.svg";
import html_logo from "./Icons/FrontEnd/html5.svg";
import npm_logo from "./Icons/FrontEnd/npm.svg";
import vuejs_logo from "./Icons/FrontEnd/vue-js.svg";

const ToolCard = ({ logo, name }) => (
  <div className='ToolsCard'>
    <div className='T_cards'>
      <img src={logo} alt={`${name}_logo`} />
    </div>
    <p>{name}</p>
  </div>
);

function FrontEndTools() {
  const toolsData = [
    { logo: react_logo, name: 'React' },
    { logo: angularjs_logo, name: 'AngularJS' },
    { logo: bootstrap_logo, name: 'Bootstrap' },
    { logo: html_logo, name: 'HTML' },
    { logo: css_logo, name: 'CSS' },
    { logo: npm_logo, name: 'NPM' },
    { logo: vuejs_logo, name: 'Vue.js' },
  ];

  return (
    <div className='ToolsAndTechnologiesContainer'>
      <div className='ToolsCardContainer'>
        {toolsData.map((tool, index) => (
          <ToolCard key={index} logo={tool.logo} name={tool.name} />
        ))}
      </div>
    </div>
  );
}

export default FrontEndTools;
