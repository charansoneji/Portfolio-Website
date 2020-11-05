import React from 'react';
import Hero from '../components/Hero';

import Content from '../components/Content';


function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p> Hey Guys, my name is Charan and I'm a ML Engineer and Cloud Architect with experience in TensorFlow, Pytorch and AWS. Im currently working on widening my spectrum in terms of languages and technologies that I can work with.</p>
                <p> My long term goal is to work by myself as an entrepreneur after I get my masters in data science done.</p>
                <p> I'm constantly engaged in learning new technologies and building applciations which could help me and the people around me with things we'd use on a day to day basis.</p>
                <p> Wehn I'm not learning something new, chances are that I'm editing a few videos or out there creating content or editing videos. I currently freelance as a video editor as well and it helps me bring out a creative side from within.</p>
            </Content>
        </div>
    );
}

export default AboutPage;