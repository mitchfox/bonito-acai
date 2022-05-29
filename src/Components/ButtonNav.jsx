import * as React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Button from '@mui/material/Button';

// CSS
import '../Styles/ButtonNav.css';


// Simple Menu item component
export default function ButtonNav() {

    const justEats = "https://www.just-eat.co.uk/restaurants-bonito-acai-leeds/menu";

    return (
        <div className='buttonContainer'>

                <Row > 
                    <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: '#7494FF',
                        fontWeight: '700',
                        fontSize: '14px',
                        marginBottom: '15px',
                        paddingTop: '10px',
                        paddingBottom: '10px'
                    }}
                >Our Menu
                </Button>
                </Row>
              
                <Row >
                    <Button
                        fullWidth
                        variant="contained"
                        href={justEats}
                        target={'_blank'}

                        sx={{
                            backgroundColor: '#5FCEBB',
                            fontWeight: '700',
                            fontSize: '14px',
                            margin: '0px',
                            paddingTop: '10px',
                            paddingBottom: '10px'
                        }}
                    >New Order
                    </Button>
                </Row>
        </div>
    );
}

