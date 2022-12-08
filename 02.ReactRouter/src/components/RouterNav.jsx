import React from 'react';
import { Link , NavLink } from 'react-router-dom'
import Style from 'Style/components/RouterNav'

const HeaderNav = () => {
    return ( 
        <header>
            <div className={Style.headerWrap}>
                <h1><Link to={"/"}>React Router</Link></h1>
                <nav>
                    <ul>
                        <li><NavLink to={"/"} ><span>Webpack</span></NavLink></li>
                        <li><NavLink to={"/redux"} ><span>Redux</span></NavLink></li>
                        <li><NavLink to={"/router"} ><span>Router</span></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HeaderNav;