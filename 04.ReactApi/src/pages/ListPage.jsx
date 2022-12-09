import React , { useCallback, useEffect } from 'react'
import ListItem from '../components/ListItem'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_LIST } from '../store/features/sync'

const ListPage = () => {
    const dispatch = useDispatch()
    const lists = useSelector(state=>state.item.lists)
    const location = useLocation()

    const getTitleName = useCallback(()=>{
        if(location.pathname === '/news'){
            return 'News'
        }else if(location.pathname === '/ask'){
            return 'Ask'
        }else if(location.pathname === '/jobs'){
            return 'Jobs'
        }
    },[location.pathname])


    useEffect(()=>{
        dispatch(FETCH_LIST(location.pathname))
        const name = getTitleName()
        document.title = `${name} | Hacker News `
    },[location.pathname])
    
    return (
        <div>
            <ListItem item={lists} />
        </div>
    )
}

export default ListPage