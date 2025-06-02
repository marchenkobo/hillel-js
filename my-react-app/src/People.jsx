import React from 'react'
import ItemCard from './ItemCard'


function People() {
    return (
        <div className="container">
            <h1 className="mb-4">People</h1>

            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search characters..."
            />

            <ItemCard
                title="Luke Skywalker"
                subtitle="Human from Tatooine"
                description="Height: 172cm, Mass: 77kg"
            />
            <ItemCard
                title="Leia Organa"
                subtitle="Human from Alderaan"
                description="Height: 150cm, Mass: 49kg"
            />
        </div>
    )
}

export default People
