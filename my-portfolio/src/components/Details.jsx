import React from 'react'
import './style.css'

function Details() {
    const names=[
        {FirstName: 'Harry',LastName: 'Potter', Age: 30},
        {FirstName: 'John',LastName: 'Peter', Age: 20},
        {FirstName: 'Alice',LastName: 'Matt', Age: 40},
      ];
  return (
    <>
    <div className='container'>
          <h1>Portfolio</h1>
      </div><div className='details'>
              {names.map((name, index) => (
                  <div key={index}>
                      <p>First Name:{name.FirstName}</p>
                      <p>Last Name:{name.LastName}</p>
                      <p>Age:{name.Age}</p>
                  </div>
              ))}
          </div>
    </>
  )
}

export default Home