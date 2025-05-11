import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FrontEndTools from './Tools/FrontEndTools';
import 'react-tabs/style/react-tabs.css';
import './ToolsAndTechnologies.css';
import BackEndTools from './Tools/BackEndTools'
import MobileTools from './Tools/MobileTools';
import DatabaseTools from './Tools/DatabaseTools';


function TabListFun() {
  return (
          <Tabs>
    <TabList>
      <Tab>Front End</Tab>
      <Tab>Back End</Tab>
      <Tab>Database</Tab>
      <Tab>Mobile</Tab>
    </TabList>

    <TabPanel>
      <FrontEndTools/>
    </TabPanel>
    <TabPanel>
      <BackEndTools/> 
    </TabPanel>
    <TabPanel>
      <DatabaseTools/>
    </TabPanel>
    <TabPanel>
      <MobileTools/> 
    </TabPanel>
  </Tabs>

  )
}

export default TabListFun