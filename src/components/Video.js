import React from 'react'
import { Link } from 'react-router-dom'
import Spline from "@splinetool/react-spline";
import './VideoStyles.css'

const Video = () => {
    return (
        <div className='hero'>
            <Spline scene="https://prod.spline.design/dVRUvHxVngm-INmz/scene.splinecode" />
            <div className='content'>
                <h1>Galaxy. Travel.</h1>
                <p>세계 최초의 민간인 우주 여행.</p>
                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn-light'>Launch</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
