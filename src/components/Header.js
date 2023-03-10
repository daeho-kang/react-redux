import React from 'react'

function Header(props){
    console.warn("header"+props.data)
    return(
        <div>
            <div className={"add-to-cart"}>
                <span className={"cart-count"}>{props.data.length}</span>
                <img width="50%" src={"https://w7.pngwing.com/pngs/833/426/png-transparent-black-shopping-cart-icon-for-free-black-shopping-cart-icon.png"}></img>
            </div>
        </div>
    )
}

export default Header



