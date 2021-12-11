import React, { useContext, useState } from 'react';
import { Contex } from '..';
import "../style.scss"
import {Link} from "react-router-dom"


const Sidebar = () => {
    const {categoris, handleClickCategori, setCat}= useContext(Contex)
    const [activId, setActivId] = useState("")


const handleClickCategoriLi = (id)=>()=>{
    setActivId(id)
       handleClickCategori(id)

}

          
   const categoriesSidbar = categoris.map((el)=>{
     return <li key = {el.id} style={{backgroundColor:el.id === activId ? "brown" : ""}} onClick={handleClickCategoriLi(el.id)}>{ el.name}</li>
})

        return (
               
                <div className="sidebarContainer">
                   <ul>
                     {categoriesSidbar}
                   </ul>
                   <Link to="/routingExample" style={{textAlign:"center", paddingBottom:"25px"}}> Routing Example</Link>
                </div>
              
        );
    }


export default Sidebar;