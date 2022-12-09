import React, { useCallback, useState ,useRef}  from 'react'
import Style from '../assets/scss/components/TodoItem.module.scss'
import { useAppDispatch } from '../store/hooks'
import { CHECK_TODO , DELETE_TODO , UPDATE_TODO } from '../store/features/todo'

type ItemProps = {
    item: {
        id:string,
        isCheck:boolean,
        content:string,
    }
}

const TodoItem = ({item}: ItemProps) => {
    const dispatch = useAppDispatch()
    const [isUpdate , setIsUpdate] = useState(false)
    const [value , setValue] = useState('')
    const updateInput = useRef<HTMLInputElement>(null)

    const onClickCheckTodo = useCallback(()=>{
        dispatch(CHECK_TODO({
            id:item.id,
            isCheck:!item.isCheck
        }))
    },[item.isCheck])

    const onClickDelete = useCallback(()=>{
        dispatch(DELETE_TODO({
            id:item.id,
        }))
    },[])

    const onSubmitForm = useCallback((e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        if(value.length){
            dispatch(UPDATE_TODO({
                id:item.id,
                content:value
            }))
        }
        setValue('')
        setIsUpdate(false)
    },[value])

    const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    },[value])

    const onClickUpdate = useCallback(()=>{
        setIsUpdate(true)
        setTimeout(()=>{
            updateInput.current?.focus()
        },100)
    },[])

    const onClickBlur = useCallback(()=>{
        setValue('')
        setTimeout(()=>{
            setIsUpdate(false)
        },100)
    },[])

    return (
        <li className={Style.itemList}>
            <div className={Style.itemWrap}>
                <div className={Style.checkWrap}>
                    {
                        item.isCheck 
                        ? <button className="xi-check-square-o" onClick={onClickCheckTodo}></button>
                        : <button className="xi-checkbox-blank" onClick={onClickCheckTodo}></button>
                    }
                </div>
                <div className={Style.titleWrap}>
                    {
                        isUpdate
                        ?
                        <form onSubmit={onSubmitForm}>
                            <input type="text" placeholder={item.content} ref={updateInput} 
                            onBlur={onClickBlur} value={value} onChange={onChangeValue}
                            />
                            <button type="submit" className="xi-check-min" onMouseDown={onSubmitForm}></button>
                        </form>
                        :<h4 className={item.isCheck ? Style.complete : ''}>{item.content}</h4>
                    }
                    {
                        isUpdate 
                        ? ''
                        : <button className="xi-pen updateBtn" onClick={onClickUpdate}></button>
                    }
                </div>
                <div className={Style.buttonWrap}>
                    <button className="xi-minus-square-o" onClick={onClickDelete}></button>
                </div>
            </div>
        </li>
    )
}

export default TodoItem