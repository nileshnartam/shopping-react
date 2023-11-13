import React from 'react';
import './list-data-binding.css';

export function ListDataBinding(){
    const topics = [
        {
            name: "javascript",
            desc: "client side programming language",
            features: [
                "need lightweight env",
                "processing fast",
                "single thread",
                "handle dom manipulations"
            ]
        },
        {
            name: "CSS",
            desc: "Style sheet forr client side",
            features: [
                "not a programming language",
                "interprete by browser",
            ]
        }        
    ];

    return (
    <>
        {
            topics.map(topic => 
                <React.Fragment key={topic.name}>
                <div className="card mt-2 ms-2 bg-primary text-white" style={{width: '18rem'}}>
                
                <div className="card-body">
                    <h5 className="card-title">{topic.name}</h5>
                    <p className="card-text">{topic.desc}</p>
                    <div className='h5'>Features</div>
                    <ol>
                        {
                            topic.features.map(feature => <li key={feature}>{feature}</li>)
                        }
                    </ol>
                </div>
                </div>                    
                </React.Fragment>
            )
        }
    </>
    );
}