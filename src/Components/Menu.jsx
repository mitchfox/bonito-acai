import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Components
import MenuItem from './MenuItem';

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
                <Box sx={{ p: 6 }}>
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



export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        sx={{ width: '100%', fontFamily: 'Oliver' }}
                        centered
                        value={value}
                        variant="scrollable"
                        onChange={handleChange}
                        aria-label="scrollable tabs example"
                        TabIndicatorProps={
                            { style: { background: 'red', opacity: 0 } }}
                      
                        // textColor={'info'}
                        visibleScrollbar={false}
                        
                    >


                        <Tab label="Bowls"
                            sx={{
                                fontFamily: 'Oliver', fontSize: '20px', padding: '25px'
                            }}{...a11yProps(0)}
                        />
                        <Tab label="Food" sx={{
                                fontFamily: 'Oliver', fontSize: '20px', padding: '25px'
                            }}{...a11yProps(1)}
                        />
                        <Tab label="Snacks" sx={{
                                fontFamily: 'Oliver', fontSize: '20px', padding: '25px'
                            }}{...a11yProps(2)}
                        />
                        <Tab label="Smoothies" sx={{
                                fontFamily: 'Oliver', fontSize: '20px', padding: '25px'
                            }}{...a11yProps(3)}
                        />
                        <Tab label="Juices"sx={{
                                fontFamily: 'Oliver', fontSize: '20px', padding: '25px'
                            }}{...a11yProps(4)}
                        />
                        {/* <Tab label="" {...a11yProps(5)} /> */}
                    </Tabs>
                </Box>
            </div>

            <div>
                <Box sx={{ backgroundColor: '#f1f1f1' }}>
                    <TabPanel value={value} index={0} sx={{  }}>
                        {/* <ListItem>
                            <ListItemText primary="Acai" secondary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                            <ListItemText primary="£7" />
                        </ListItem> */}

                        <MenuItem />
                        <MenuItem />

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    {/* <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel> */}
                </Box>
            </div>

        </div>
    );
}


