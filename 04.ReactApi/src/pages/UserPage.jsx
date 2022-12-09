import React , { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FETCH_USER } from '../store/features/sync'
import { useDispatch , useSelector } from 'react-redux'
import UserItem from '../components/UserItem'
import Style from '../assets/scss/pages/UserPage.module.scss'

const UserPage = () => {
    const user = useSelector(state => state.item.user)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(()=>{
        dispatch(FETCH_USER(params.id))
        document.title = `${params.id} | Hacker News`
    },[params.id])

    return (
        <div className={Style.userContainer}>
            <UserItem item={user}/>
        </div>
    )
}

export default UserPage