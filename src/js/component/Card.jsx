import React from 'react'

const Card = ({ title, description, image, buttonText }) => {
    return (
        <div className="card h-100">
            < img src={image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">{buttonText}</a>
            </div>
        </div >
    )
}
export default Card