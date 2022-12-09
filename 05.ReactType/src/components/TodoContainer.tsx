import React  from 'react'
import TodoItem from './TodoItem'
import { useAppSelector } from '../store/hooks'
import Style from '../assets/scss/components/TodoContainer.module.scss'

const TodoContainer = () => {
    const todos = useAppSelector(state => state.todo.todos)

    return (
        <ul className={Style.containerWrap}>
            {
                todos.map(v=>{
                    return <TodoItem item={v} key={v.id}/>
                })
            }
        </ul>
    )
}

export default TodoContainer