import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Style from '../assets/scss/components/ListItem.module.scss'

const ListItem = ({item}) => {
    return (
        <ul>
            {
                item.map((item, index)=>
                    <li key={index} className={Style.itemContainer}>
                        <div className={Style.itemWrap}>
                            <span className={Style.indexNumber}>{index + 1}</span>
                            <div className={Style.itemInfo}>
                                {
                                    item.domain 
                                    ? <p><a href={item.url} target="_blank" rel="noreferrer">{item.title}</a></p>
                                    : <p><Link to={`/item/${item.id}`}>{item.title}</Link></p>
                                }
                                <div>
                                    <Fragment>
                                        {
                                            item.type === 'job'
                                            ? <span>by</span>
                                            : <span>{item.points} points by</span>
                                        }
                                    </Fragment>
                                    <Fragment>
                                        {
                                            item.user
                                            ? <Link to={`/user/${item.user}`}>{item.user}</Link>
                                            : <a href={item.url} target="_blank" rel="noreferrer">{item.domain ? item.domain : 'Unknown'}</a>
                                        }
                                    </Fragment>
                                    <span>{item.time_ago}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            }
        </ul>
    )
}

export default React.memo(ListItem)