import React from 'react'
function Home(props)
{
    console.warn("props",props.data)
    return(
        <div>
            <h1>Home Component</h1>

            <div className="cart-wrapper">
                <div className={"img-wrapper item"}>
                    <img width="50%" src={"https://cdn.pixabay.com/photo/2016/05/16/08/12/tiger-1395138_960_720.png"}></img>
                </div>
                <div className={"text-wrapper item"}>
                    <span>I-Tiger</span>
                    <span>Price : 1000$</span>
                </div>
                <div className={"btn-wrapper item"}>
                    <button
                        onClick={()=>{props.addToCartHandler({pice:1000, name:'i tiger 11'})
                        }}>
                        Add to Cart
                    </button>
                    <button className={"remove-cart-btn"}
                        onClick={()=>{props.removeToCartHandler({})
                        }}>
                        Remove to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home