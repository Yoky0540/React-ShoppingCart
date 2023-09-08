import React from 'react'
import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteIcon from '../image/delete-icn.svg' 
import { MyCartContext } from '../management/context'


const CartItem = (props) => {
    const {id,name,image_url,price,quantity} = props
    const itemTotalPrice = quantity*price

    const {removeItem,toggleQuantity,formatNumber} = MyCartContext()

    return (
        <div className='item'>
            <div className="product_image">
                <img src={image_url} alt={name}/>
            </div>
            <div className="description">
                <span>{name}</span>
                <span>ราคา {formatNumber(price)} บาท</span>
            </div>
            <div className="quantity">
                <button className='plus-btn' onClick={()=>toggleQuantity(id,"increment")}>
                    <img src={plus} alt="plus-btn"/>
                </button>
                <input type="text" value={quantity} disabled/>
                <button className='minus-btn' onClick={()=>toggleQuantity(id,"decrement")}>
                    <img src={minus} alt="minus-btn"/>
                </button>
            </div>
            
            <div className="total-price">
                {formatNumber(itemTotalPrice)}
            </div>

            <div className='remove' onClick={()=>removeItem(id)}>
                <img src={deleteIcon} alt="delete-btn" />
            </div>
        </div>
    )
}

export default CartItem