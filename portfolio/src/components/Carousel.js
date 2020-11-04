import React from 'react';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The Cookbook for Developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    seletced: false
                },
                {
                    id: 1,
                    title: 'Charan Soneji',
                    subTitle: 'ML Blogger',
                    imgSrc: blogger,
                    link: 'https://www.medium.com/100daysofml',
                    seletced: false
                },
                {
                    id: 2,
                    title: 'Everest',
                    subTitle: 'A social Network for developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    seletced: false
                }
            ]
        }
    }

    render() {
        return (
            <p>Carousel Works</p>
        );
    }
}

export default Carousel;