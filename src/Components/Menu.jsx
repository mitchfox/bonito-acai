import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
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
                <Box sx={{ paddingLeft: '25px', paddingRight: '25px', marginLeft: '20px', marginRight: '20px' }}>
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

function menuProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Overriding Individual Tabs Theme
const StyledTabs = styled((props) => (
    <Tabs
        sx={{

        }}
        {...props}
        TabIndicatorProps={{ style: { background: 'red', opacity: 0 } }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

// Overriding Individual Tab Theme 
const StyledTab = styled((props) =>
    <Tab
        disableRipple
        {...props}
        sx={{
            fontFamily: 'Oliver', fontSize: '20px', padding: '25px', marginLeft: '20px', marginRight: '20px'
        }} />
)(
    ({ theme }) => ({
        // textTransform: 'none',
        // fontWeight: theme.typography.fontWeightRegular,
        // fontSize: theme.typography.pxToRem(15),
        // marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.4)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),

);


export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div>
                <Box sx={{ width: '100%', backgroundColor: '#7D5AD3',  }}>
                    <StyledTabs
                        sx={{ width: '100%', fontFamily: 'Oliver' }}
                        value={value}
                        variant="scrollable"
                        onChange={handleChange}
                        aria-label="scrollable tabs example"
                        TabIndicatorProps={
                            { style: { background: 'red', opacity: 0 } }}

                        // textColor={'info'}
                        visibleScrollbar={false}

                    >
                        <StyledTab label="Bowls"
                            {...menuProps(0)}
                        />
                        <StyledTab label="Food"
                            {...menuProps(1)}
                        />
                        <StyledTab label="Snacks"
                            {...menuProps(2)}
                        />
                        <StyledTab label="Smoothies"
                            {...menuProps(3)}
                        />
                        <StyledTab label="Juices"
                            {...menuProps(4)}
                        />
                        {/* <Tab label="" {...a11yProps(5)} /> */}
                    </StyledTabs>
                </Box>
            </div>

            <div>

                {/* Map the arrays of each menu catergory */}
                <Box sx={{ backgroundColor: '#ffffff', marginTop: '25px' }}>
                    <TabPanel value={value} index={0} sx={{}}>


                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
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
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </TabPanel>
                    {/* <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel> */}
                </Box>
            </div>

        </div>
    );
}


