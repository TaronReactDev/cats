import React, { useContext } from 'react';
import { Contex } from '..';
import "../style.scss"



const UnicCat = ({catModal}) => {
          
  const {handleClose} =useContext(Contex)


        return (
               <div className="unicCatModal" style={{display:catModal.display}}>
                   <div className="modalBack" onClick={handleClose}></div>

            <div className="imgAndBtnContainer">
                
            <button className="closeBtn" onClick={handleClose}>x</button>
            <div className="catModalImg" style={{backgroundImage:`url(${catModal.url})`}} > 
                </div>   
            </div>
                </div>
        );
    }


export default UnicCat;