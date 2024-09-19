import React from "react";
import AbcIcon from "../Icon/products-logo.svg"
import HrcIcon from "../Icon/company-logo.svg"

export default function Header(){
    return(
        <header className="header">
             <img src={AbcIcon} />
            <img src={HrcIcon} style={{marginLeft:'2rem'}}/>
        </header>
    )
}