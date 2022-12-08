import React from 'react';
import Style from 'Style/pages/RouterPage'

const RouterPage = () => {
    return ( 
        <div className={Style.router}>
            <h1>React Router Setting</h1>
            <img src={require('Image/reactRouter.png')} alt="라우터 로고" />
        </div>
    );
}

export default RouterPage;