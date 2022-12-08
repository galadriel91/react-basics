import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../assets/scss/components/UserItem.module.scss'

const UserItem = ({item}) => {
    return (
        <div>
            <div className={Style.userWrap}>
                <p className="xi-user-address"></p>
                {
                    item.karma 
                    ?
                    <div className={Style.userInfo}>
                        <h4>User : {item.id}</h4>
                        <p>created : {item.created}</p>
                        <span>Karma : {item.karma}</span> 
                    </div> 
                    :
                    <div className={Style.userInfo}>
                        <h4><Link to={`/user/${item.user}`}>User : {item.user}</Link></h4>
                        <p>Posted : {item.time_ago}</p>
                        <span>Points : {item.points}</span> 
                    </div>

                }
            </div>
            {
                item.about
                ?
                <div className={Style.userDesc}>
                    <p>About</p>
                    <div dangerouslySetInnerHTML={{ __html: item.about }}></div>
                </div>
                :''
            }
        </div>
    )
}

export default React.memo(UserItem)
