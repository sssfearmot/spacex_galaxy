import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- SSO -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$1,200,000 ~ </p>
                    <p>- 500 ~ 600km -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- LEO -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$1,200,000 ~ </p>
                    <p>- 2000 ~ 8000km -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- POLAR -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$1,200,000 ~ </p>
                    <p>- 8000 ~ 50000km  -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
