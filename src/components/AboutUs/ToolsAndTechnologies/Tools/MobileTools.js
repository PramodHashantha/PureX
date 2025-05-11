import React from 'react';
import "./Tools.css";
import android_logo from "./Icons/Mobile/android.svg";
import apple_logo from "./Icons/Mobile/apple-ios-svg.svg";
import fulter_logo from "./Icons/Mobile/fulter.svg";
import reactNative_logo from "./Icons/Mobile/react-native-1.svg";

const ToolCard = ({ logo, name }) => (
  <div className='ToolsCard'>
    <div className='T_cards'>
      <img src={logo} alt={`${name}_logo`} />
    </div>
    <p>{name}</p>
  </div>
);

function MobileTools() {
  const mobileToolsData = [
    { logo: android_logo, name: 'Android' },
    { logo: apple_logo, name: 'Apple iOS' },
    { logo: fulter_logo, name: 'Flutter' },
    { logo: reactNative_logo, name: 'React Native' },
  ];

  return (
    <div className='ToolsAndTechnologiesContainer'>
      <div className='ToolsCardContainer'>
        {mobileToolsData.map((tool, index) => (
          <ToolCard key={index} logo={tool.logo} name={tool.name} />
        ))}
      </div>
    </div>
  );
}

export default MobileTools;
