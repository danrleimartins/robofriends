import React from 'react';

const Card = ({ name, email, id}) => {
    return (
        <div className="tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?set=set3`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;