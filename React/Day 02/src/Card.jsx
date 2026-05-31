import React from 'react'
import Button from './Button'

function Card({ name = "John", age = "10" }) {


    return (
        <div className="card">
            <div style={{ display: "flex", gap: "20px" }}>
                <label>Name:</label>
                <h2>{name}</h2>
            </div>
            <p style={{
                color: age >= 18 ? "green" : "red"
            }}>Age:-{age}</p>
            <p>
                Vote: {age >= 18 ? "Yes" : "No"}
            </p>
            {
                age >= 18 && <Button age={age} />
            }

        </div>

    )
}

export default Card
