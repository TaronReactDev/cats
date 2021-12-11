import React, { useContext, useState } from 'react';
import { Contex } from '..';
import "../style.scss"

const Cats = () => {
    const {cat, handleShowMore, handleShowOnwCat}= useContext(Contex)
  

   const cats = cat.map((el)=>{
     return  <div className="hovetCatContainer"><div key = {el.id} className="catImg" style={{backgroundImage:`url(${el.url})`}} onClick={handleShowOnwCat(el.url)}>
               
          </div>
           <div className="hoverCat">Click me</div></div>
})




        return (
               
            <div className="container">
                <div className="catContainer">
                     {cats}
                </div>
                <button onClick={handleShowMore}> Show More</button>
                
                </div>
        );
    }


export default Cats;