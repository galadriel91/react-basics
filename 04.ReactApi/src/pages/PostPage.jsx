import React , { useEffect } from 'react'
import { FETCH_POST } from '../store/features/sync'
import { useParams } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import UserItem from '../components/UserItem'
import Style from '../assets/scss/pages/PostPage.module.scss'

const PostPage = () => {
    const post = useSelector(state => state.item.posts)
    const dispatch = useDispatch()
    const params = useParams()
    
    useEffect(()=>{
        dispatch(FETCH_POST(params.id))
        document.title = `Post | Hacker News`
    },[params.id])

    return (
        <div className={Style.itemContainer}>
            <UserItem item={post}/>
            <div className={Style.itemWrap}>
                <h1>{post.title}</h1>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
                </div>
            </div>
        </div>
    )
}

export default PostPage