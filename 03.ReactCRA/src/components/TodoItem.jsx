import React  from 'react'
import Style from '../assets/scss/components/TodoItem.module.scss'
import { useDispatch } from 'react-redux'

const TodoItem = ({item}) => {
    const dispatch = useDispatch()

    return (
        <li className={Style.itemList}>
            <div className={Style.itemWrap}>
                <div className={Style.checkWrap}>
                    {/* {
                        item.isCheck 
                        ? <button className="xi-check-square-o" onClick={onClickCheckTodo}></button>
                        : <button className="xi-checkbox-blank" onClick={onClickCheckTodo}></button>
                    } */}
                </div>
                <div className={Style.titleWrap}>
                    {/* {
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
                    } */}
                    타이틀
                </div>
                <div className={Style.buttonWrap}>
                    {/* <button className="xi-minus-square-o" onClick={onClickDelete}></button> */}
                </div>
            </div>
        </li>
    )
}

export default TodoItem