import React from 'react';
import Style from 'Style/pages/WebpackPage'

const WebpackPage = () => {
    return ( 
        <div className={Style.webpack}>
            <h1>React Webpack Setting</h1>
            <img src={require('Image/webpack.png')} alt="웹팩 로고" />
        </div>
    );
}
 
export default WebpackPage;