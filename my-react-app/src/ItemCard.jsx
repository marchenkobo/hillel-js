import React from 'react'

function ItemCard({ title, subtitle, description }) {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default ItemCard
