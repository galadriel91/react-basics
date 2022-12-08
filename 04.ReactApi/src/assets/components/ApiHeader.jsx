import React from 'react';
import Style from '../scss/components/CraNav.module.scss'
import { NavLink , Link } from 'react-router-dom'

const ApiHeader = () => {
    return ( 
        <header>
            <div className={Style.headerWrap}>
                <h1><Link to={'/'}>React Api</Link></h1>
                <nav>
                    <ul>
                        <li><NavLink to={'/news'}><span>News</span></NavLink></li>
                        <li><NavLink to={'/ask'}><span>Ask</span></NavLink></li>
                        <li><NavLink to={'/jobs'}><span>Jobs</span></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default ApiHeader;