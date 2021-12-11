import React, { createContext, useEffect, useState, } from 'react';
import Sidebar from "./Sidebar/sidebar"
import Cat from "./CatImgContainer/Cats"
import UnicCat from "./CatImgContainer/UnicCat"

import axios from 'axios';
import "./style.scss"

export const Contex = createContext(null)

const Index = (props) => {

    const [categoris , setCategoris] = useState([])
    const [cat, setCat] = useState([])
    const [limit, steLimit]= useState(10)
    const [categoriId, setCategoriId]= useState("")
    const [catModal, setCatModal]=useState(
        {
            display:"none",
            url:""
}
)

  
    useEffect(
        ()=>{
             axios.get("https://api.thecatapi.com/v1/categories").then(res => res).then(data => setCategoris(data.data));
             axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=1`).then(res => res).then(data => setCat(data.data));
    },[])


    useEffect(
        ()=>{

            axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${categoriId}`).then(res => res).then(data => setCat(data.data));

    },[limit])


    useEffect(
        ()=>{ steLimit(10)
    },[categoriId])


    const handleClickCategori = (id)=>{
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${id}`).then(res => res).then(data => setCat(data.data));
        setCategoriId(id)
       }
       
    const handleShowMore =()=>{
        steLimit(prev => prev+10)
    }


    const handleShowOnwCat =(url)=>()=>{
        setCatModal({...catModal, display:"flex", url:`${url}`})
    }

    const handleClose = () => {setCatModal({...catModal, display:"none", url:``})}



if(!categoris.length){
    return <div>Loading ...</div>
}else{
    return (

        <Contex.Provider value={{categoris, handleClickCategori, setCat, cat, handleShowMore,handleShowOnwCat, handleClose}}>
        <div className="mainContainer">    
        <Sidebar/>
        <Cat/>
       
        <UnicCat catModal={catModal}/>
        </div>
        </Contex.Provider>
 );
}
}

      


export default Index;