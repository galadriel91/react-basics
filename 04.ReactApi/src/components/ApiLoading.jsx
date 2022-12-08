import React from 'react';
import Style from '../assets/scss/components/CraLoading.module.scss'

const ApiLoading = ({ loading }) => {
    return (
        <div>
            {
                loading
                ?
                <div className={Style.loadingWrap}>
                    <div className={Style.loader}></div>
                </div>
                :''
            }
        </div> 
    );
}

export default ApiLoading;