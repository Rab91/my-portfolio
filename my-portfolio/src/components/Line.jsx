import React from 'react'

const Line = ({colour='red',height=22}) => {
  return (
    <div>
        <hr 
        style={{
            backgroundColor: colour,
            height: height,
            borderColor: 'rgb(36, 53, 203)',
            borderWidth: 3,
        }}
        />
    </div>
  )
}

export default Line