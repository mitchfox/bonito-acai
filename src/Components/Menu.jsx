import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


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
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                        <Tabs
                            sx={{ width: '100%' }}
                            centered
                            value={value}
                            variant="scrollable"
                            onChange={handleChange}
                            aria-label="scrollable tabs example"
                        >
                            <Tab label="Bowls" {...a11yProps(0)} />
                            <Tab label="Food" {...a11yProps(1)} />
                            <Tab label="Snacks" {...a11yProps(2)} />
                            <Tab label="Smoothies" {...a11yProps(3)} />
                            <Tab label="Juices" {...a11yProps(4)} />
                            {/* <Tab label="" {...a11yProps(5)} /> */}
                        </Tabs>
                    </Box>
            </div>

            <div>
                <Box sx={{ }}>
                    <TabPanel value={value} index={0}>
                        <ListItem>
                            <ListItemText primary="Acai" secondary="Jan 7, 2014" />
                            <ListItemText primary="£7" />
                        </ListItem>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
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


