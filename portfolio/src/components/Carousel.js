import React from 'react';

import medium from '../assets/images/medium.png';
import myself from '../assets/images/myself.png';
import github from '../assets/images/github.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Medium.com',
                    subTitle: 'ML Blogger',
                    imgSrc: medium,
                    link: 'https://www.medium.com/100daysofmlcode',
                    seletced: false
                },
                {
                    id: 1,
                    title: 'Charan Soneji',
                    subTitle: 'ML/DL Enthusiast',
                    imgSrc: myself,
                    link: '/',
                    seletced: false
                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: 'Data Analyst and Developer',
                    imgSrc: github,
                    link: 'https://www.github.com/charansoneji',
                    seletced: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;