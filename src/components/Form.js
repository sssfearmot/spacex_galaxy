import React from 'react'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label><sup>*</sup>이름 (your name)</label>
                <input type='text'></input>
                <label><sup>*</sup>이메일 (email)</label>
                <input type='email'></input>
                <label><sup>*</sup>제목 (subject)</label>
                <input type='text'></input>
                <label><sup>*</sup>내용 (details)</label>
                <textarea rows='6' placeholder='Type a short message here' />
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form
