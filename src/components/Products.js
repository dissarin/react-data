import React, { Component } from 'react'
import data from '../Data';

export default class Products extends Component 
{
    render() 
    {
        return (
            <div>
                <h2>สินค้าทั้งหมด</h2>
                {
                    data.products.map(item =>
                        <div>
                            {item.name} 
                            ราคา {item.price} บาท
                            จำนวนคงเหลือง {item.stock} ชิ้น
                        </div>
                        

                        )
                }
            </div>
        )
    }
}
