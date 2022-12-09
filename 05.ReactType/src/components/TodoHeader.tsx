import React from 'react'
import { useAppSelector } from '../store/hooks'
import '../assets/scss/components/TodoHeader.scss'

const TodoHeader = () => {
    const title = useAppSelector(state => state.todo.title)
    return ( 
        <header>
            <h1>{title}</h1>
        </header>
    );
}

export default TodoHeader;