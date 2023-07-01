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
        <Box sx={{ p: 1 ,color:"white"}}>
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
    
    <Box sx={{ width: '100%' }}  className='tab' >
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='px-5'>
          <Tab label="Education" {...a11yProps(0)} className="tab-content" sx={{ color:'white' ,fontWeight:"bold",fontSize:"1.2rem",marginLeft:"20px"}}/>
          <Tab label="Work" {...a11yProps(1)} className="tab-content" sx={{ color:'white',fontWeight:"bold",fontSize:"1.2rem",marginLeft:"20px"}}/>
        
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} sx={{margin:'0'}}>
     <div className='about-me'>
      <h5> Currently  I'm  pursuing B.E. in Information technology from University of Mumbai🎓.</h5>
      <h5>  I'm full stack developer👩‍💻 with great knowledge of MERN stack.</h5>
      <h5> I'm also familiar with C/C++ and python programming languages 💯</h5>
           </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
     <div>
      <h5> Currently  I'm  working as a Frontend Web Developer Intern at Techuristic Organization 👩‍💻 .</h5>
    <h5>I have explored different technologies and some of my work is below in the projects 👇</h5>
    </div> 
      </TabPanel>
     
    </Box>
  );
}

