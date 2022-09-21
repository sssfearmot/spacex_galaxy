import React, { Component } from 'react'
import './HeroImageStyles.css'

import spaceVideo from '../assets/space.mp4'

class HeroImage extends Component {
    render() {
        return (
            <div className='hero-img'>
                <video autoPlay loop muted id='video'>
                    <source src={spaceVideo} type='video/mp4' />
                </video>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImage
