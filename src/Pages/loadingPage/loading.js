import React from 'react'
import Loader from 'react-loader-spinner'
import "./loading.css"
export default function LoadingPage() {
    
    
    return (
        <div >
       
            <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={5000} 
         className="load"
 />


        </div>
    )
}
