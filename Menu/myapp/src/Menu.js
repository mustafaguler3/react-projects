import React from "react"

const Menu = ({ items }) =>{
    return (
        <div className="section-center">
            {items.map((menuItem)=>{
                const {id,title,img,price} = menuItem;

                return(
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo"/>
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price"> {price} TL</h4>
                            </header>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Menu;