import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 ,color:"white"}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AboutComp() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Education" {...a11yProps(0)} sx={{ color:'white' ,fontWeight:"bold",fontSize:"1.2rem",marginLeft:"20px"}}/>
          <Tab label="Work" {...a11yProps(1)} sx={{ color:'white',fontWeight:"bold",fontSize:"1.2rem",marginLeft:"20px"}}/>
        
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
     <ul className='about-me'>
      <li> Currently  I'm  pursuing B.E. in Information technology from University of Mumbai🎓.</li>
      <li>  I'm full stack developer👩‍💻 with great knowledge of MERN stack.</li>
      <li> I'm also familiar with C/C++ and python programming languages 💯</li>
           </ul>

      </TabPanel>
      <TabPanel value={value} index={1}>
      <ul className='about-me'>
      <li> Currently  I'm  working as a Frontend Web Developer Intern at Techuristic Organization 👩‍💻 .</li>
    <li>I have explored different technologies and some of my work is below in the projects 👇</li>
           </ul>
      </TabPanel>
     
    </Box>
  );
}
