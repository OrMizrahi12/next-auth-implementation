import { useContext, useEffect, useState } from 'react';
import Style from '../../styles/popup.module.css'
import { AppContext } from '../context/contect';

const Popup = ({content}) => {
 
    const {showPopup} = useContext(AppContext);

    return (
        <>
            {
                showPopup && <div className={Style.popup}>
                   <h1>{content}</h1>
                </div>
             }
        </>
    );
};

export default Popup;
