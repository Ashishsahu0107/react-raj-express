import React from 'react'
import seriesData from '../api/seriesData.json';

const Home = () => {
    return (
        <ul className='ps-48 pe-48 pt-3'>
            {seriesData.map((currElem) => {
                return (
                    <li className='m-6'>
                        <div>
                            <img src={currElem.img_url} alt="qot.png" width="30%" />
                        </div>
                        <h2 className='h1'>Name: {currElem.name}</h2>
                        <h3>Rating: {currElem.rating} </h3>
                        <p>Summary: {currElem.description} </p>
                        <p>Genre: {currElem.genre} </p>
                        <p>Cast: {currElem.cast}</p>
                        <a href={currElem.watch_url} target="_blank">
                            <button className='btn bg-black text-white font-bold '>Watch Now</button>
                        </a>
                    </li>
                )
            })}

        </ul>
    )
}

export default Home;