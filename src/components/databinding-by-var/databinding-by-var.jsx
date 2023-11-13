import React from 'react';
import './databinding-by-var.css';

export function DataBindingByVar(){
    const products = [
        {
            name: `boAt Airdopes 131 PRO with 11mm Drivers,45Hrs Playback,ASAP Charge & Quad Mic ENx Bluetooth Headset  (Active Black, In the Ear)`,
            price: 1199,
            originalPrice: 2990,
            offPercent: 59,
            rating: {
                rate: 2.9,
                count: 199486
            },
            image: `boat1.webp`,
            stock: true
        },
        {
            name: `HOPPUP AirDoze Grand Pro with Power Bank Function, 200 Hrs Playtime, ENC & Gaming Mode Bluetooth Headset  (Blue, True Wireless)`,
            price: 903,
            originalPrice: 4999,
            offPercent: 81,
            rating: {
                rate: 3.9,
                count: 199486
            },
            image: `phone2.webp`,
            stock: false
        }
    ];
    return (
        <React.Fragment>
        <dl>
            <dt>Name</dt>
            <dd>{products[0].name}</dd>
        </dl>
        <dl>
            <dt>Price</dt>
            <dd>{products[0].originalPrice.toLocaleString('en-in',{style:'currency', currency:'INR'})}</dd>
        </dl>
        <dl>
            <dt>Off</dt>
            <dd>{products[0].offPercent}</dd>
        </dl>
        <dl>
            <dt>Ratings</dt>
            <dd>{products[0].rating.rate} <span className='bi bi-star text-success'></span> [{products[0].rating.count}]</dd>
        </dl>
        <dl>
            <dt>Stock</dt>
            <dd>{products[0].stock? 
            <React.Fragment>Available <i className="bi bi-stars"></i></React.Fragment> 
            : 
            <React.Fragment>Out of stock <i className="bi bi-x-octagon"></i></React.Fragment>}
            </dd>
        </dl>                              
        </React.Fragment>
    );
}