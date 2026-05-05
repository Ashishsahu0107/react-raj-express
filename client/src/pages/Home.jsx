import React from 'react'

const Home = () => {

    const name = "Ashish";
    let age = 56;

    const summary = "A paragraph is a self-contained unit of writing, consisting of one or more sentences that develop a single, central idea. It typically features a topic sentence, supporting details, and a concluding sentence, acting as a structural building block to organize text and aid reader comprehension. Key elements include unity, coherence, and focused development of the topic."

    const returnGenre = () => {
        const genre = "RomCom";
        return genre;
    }

    let canWatch = "Not Available";
    if (age >= 18) canWatch = "Watch Now";



    return (
        <>
            <div>
                <div>
                    <img src="movie.png" alt="" width="40%" height="" />
                </div>
                <div>
                    <p className='text-red-400' >Name : {name} </p>
                    <p>Rating; </p>
                    <p>Summary : {summary} </p>
                    <p>{returnGenre()} </p>
                    {/* <button className='p-1 bg-gray-200 rounded-1xl' >{age >= 16 ? "watch now" : "not available"}</button> */}
                    <button className='p-1 bg-gray-200 rounded-1xl' >{canWatch}</button>
                </div>
            </div>
        </>
    )
}

export default Home;