import React, { useState , useCallback , useRef , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TODO } from '../store/features/todo'
import Style from '../assets/scss/components/TodoInput.module.scss'

const TodoInput = () => {
    const [value , setValue] = useState('')
    const input = useRef('')
    const dispatch = useDispatch()
    
    useEffect(()=>{
        input.current.focus()
    },[])

    const onChangeInput = useCallback((e)=>{
        setValue(e.target.value)
    },[])

    const onSubmitForm = useCallback((e)=>{
        e.preventDefault()
        if(value.length){
            dispatch(ADD_TODO({
                id:Date.now(),
                isCheck:false,
                content:value,
            }))
            setValue('')
            input.current.focus()
        }else{
            alert('다시 한번 확인 부탁 드립니다.')
        }
    },[value])

    return (
        <form className={Style.inputWrap} onSubmit={onSubmitForm}>
            <input type="text" placeholder="오늘 해야할 일을 입력해 주세요" value={value} ref={input} onChange={onChangeInput}/>
            <button className="xi-arrow-right" type="submit"></button>
        </form>
    )
}

export default TodoInput