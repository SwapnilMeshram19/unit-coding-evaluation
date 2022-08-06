import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ProductCard } from '../Components/ProductCard';
export const Home=()=>{

    const [data,setData]=useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url:"http://localhost:8080/products"
        }).then((res)=>setData(res.data)).catch((error)=>console.log(error))

    },[])



    return(
        <div>
            {
                data.length==0?<div>loading</div>:
                <div>
            {
                data.map((el)=><ProductCard key={el.id} product={el}/>)
            }
                </div>
            }
        </div>
    )
}