import React from 'react'
import './TrainingStyles.css'

import { Link } from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
                <p>우주를 여행할 때는 철저한 훈련이 필요합니다. <br/>
                    비행 전 및 비행 중 시나리오에 대한 포괄적인 교육을 제공합니다.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training
