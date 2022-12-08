import React from 'react';
import { useSelector } from 'react-redux'
import Style from '../assets/scss/components/CraLoading.module.scss'

const ApiLoading = () => {
    const loading = useSelector(state=> state.item.isLoading)
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