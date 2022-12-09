import React  from 'react'
// import TodoItem from './TodoItem'
import Style from '../assets/scss/components/TodoContainer.module.scss'

const TodoContainer = () => {
    // const dispatch = useDispatch()
    // const todos = useSelector(state => state.todo.todos)

    return (
        <ul className={Style.containerWrap}>
            {/* {
                todos.map(v=>{
                    return <TodoItem item={v} key={v.id}/>
                })
            } */}
        </ul>
    )
}

export default TodoContainer