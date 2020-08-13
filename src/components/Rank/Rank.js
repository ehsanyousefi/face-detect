import React from 'react'

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='center'>
        {`${name}, Your Entry Count is : ${entries}`}
      </div>
    </div>
  )
}

export default Rank
