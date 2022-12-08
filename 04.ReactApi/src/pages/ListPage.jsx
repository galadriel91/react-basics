import React , { useEffect , useCallback } from 'react'
import ListItem from '../components/ListItem'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_LIST } from '../store/features/items'

const ListPage = () => {
    const dispatch = useDispatch()
    const lists = useSelector(state=>state.item.lists)
    const location = useLocation()

    useEffect(()=>{
        dispatch(FETCH_LIST(location.pathname))
    },[location.pathname])
    
    return (
        <div>
            <ListItem item={lists} />
        </div>
    )
}

export default ListPage