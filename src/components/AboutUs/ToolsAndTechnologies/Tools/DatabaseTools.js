import React from 'react';
import "./Tools.css";
import sql_logo from "./Icons/Database/SQL-server.svg";
import mongodb_logo from "./Icons/Database/mongodb.svg";
import mysql_logo from "./Icons/Database/my-SQL.svg";
import postgre_logo from "./Icons/Database/postgre.svg";

const ToolCard = ({ logo, name }) => (
  <div className='ToolsCard'>
    <div className='T_cards'>
      <img src={logo} alt={`${name}_logo`} />
    </div>
    <p>{name}</p>
  </div>
);

function DatabaseTools() {
  const databaseToolsData = [
    { logo: sql_logo, name: 'SQL Server' },
    { logo: mongodb_logo, name: 'MongoDB' },
    { logo: mysql_logo, name: 'MySQL' },
    { logo: postgre_logo, name: 'PostgreSQL' },
  ];

  return (
    <div className='ToolsAndTechnologiesContainer'>
      <div className='ToolsCardContainer'>
        {databaseToolsData.map((tool, index) => (
          <ToolCard key={index} logo={tool.logo} name={tool.name} />
        ))}
      </div>
    </div>
  );
}

export default DatabaseTools;
