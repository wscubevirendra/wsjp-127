import React from 'react'

export default function ProductCard({ image, title = "Dummmy Product" }) {
    return (
        <div className="col-3">
            <div className="card">
                <img width={200} src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>

                </div>
            </div>
        </div>


    )
}
