import React from 'react'

const Cards = ({result , errorRef}) => {
  return (
    <>
      <div className="cardcontainer w-[96vw] md:p-4 md:w-full  p-2 grid grid-cols-1  md:grid-cols-3">
            {result.map((elem,id)=>{
              return <div key={id} className="card bg-gray-200 rounded-xl py-4 pb-7 px-4 m-1 ">
                <img src={elem.strMealThumb} className='w-full object-fit my-2 h-52 rounded-xl' alt="" />
                <h1 className={`text-3xl text-center py-2  font-bold`}>{elem.strMeal}</h1>
                <p className='my-7 px-4 text-2xl font-semibold'>{elem.strArea}</p>
                <p className='text-xl my-6 px-4'><span className='font-bold mr-2'>Category:</span>{elem.strCategory}</p>
                <div className="flex justify-between">
                <a href={elem.strYoutube} target="_blank" rel="noopener noreferrer" className='bg-red-600 font-bold rounded-full  text-white py-2 px-4 ml-4'>Yoututbe</a>
                <div onClick={()=>{console.log(elem.idMeal);}} className='bg-green-600 font-bold rounded-full  text-white py-2 px-4  ml-4'>Recipe</div>
                </div>
              </div>
            })}
          </div>
          
          <div>{errorRef}</div>
    </>
  )
}

export default Cards
