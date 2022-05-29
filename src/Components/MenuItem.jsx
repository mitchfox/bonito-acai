import * as React from 'react';

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

// CSS
import '../Styles/MenuItem.css';

export default function RecipeReviewCard() {


    return (
            <div>
                <Row>
                    <Col span={10}>
                        <p className='itemName'>Acai Bowl</p>
                    </Col>
                    <Col span={2}>
                        <p className='itemPrice'>£7</p>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <p className='itemDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Col>
                </Row>
            </div>
    );
}

