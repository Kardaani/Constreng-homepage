'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, Carousel } from 'antd';
import SEO from 'app/components/SEO';
import bootstrap from '../../public/scripts/bootstrap_contact'

const Home = (props) => {

    return (
        <DefaultLayout>

            <Heading
                title="Hey You, Yes You!, Want to be More Productive? Have lists of things you care about? Love simple and sexy UI?"
            />

            <Col span={24} className="component--slider">
                <div>
                    <div className="image">
                        <img src="../public/images/slider/2.png" />
                    </div>
                    <div className="title" style={{ textAlign: 'center' }}>This is a screenshot of the Board view page</div>
                </div>
            </Col>

            <SEO url="home" />

        </DefaultLayout>
    );

}

export default Home;
