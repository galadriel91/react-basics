import React , { useCallback } from 'react'
import Style from 'Style/pages/ReduxPage';
import {useSelector , useDispatch} from 'react-redux'
import {add_number , minus_number} from 'Store/actions/number'


const ReduxPage = () => {
    const dispatch = useDispatch()
    const store = useSelector(state=>state.number)

    const onClickPlus = useCallback(()=>{
        dispatch(add_number())
    },[])
    const onClickMinus = useCallback(()=>{
        dispatch(minus_number())
    },[])


    return (
        <div className={Style.redux}>
            <h1>{store.title}</h1>
            <img src={require('Image/redux.png')} alt="Redux 로고 아이콘"/>
            <p>{store.number}</p>
            <div>
                <button onClick={onClickPlus}>PLUS</button>
                <button onClick={onClickMinus}>MINUS</button>
            </div>
        </div>
    )
}

export default ReduxPage