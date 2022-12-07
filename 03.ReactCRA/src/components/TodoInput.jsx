import React from 'react'
import Style from '../assets/scss/components/TodoInput.module.scss'

const TodoInput = () => {
    
    return (
        <form className={Style.inputWrap} >
            <input type="text" placeholder="오늘 해야할 일을 입력해 주세요" />
            <button className="xi-arrow-right" type="submit"></button>
        </form>
    )
}

export default TodoInput