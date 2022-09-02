import React, { useState, useEffect } from 'react'
import './date.css'
import DateDisplay from './DateDisplay'

const DateContainer = () => {
  // useState
  const [date, setDate] = useState(Date.now())
  useEffect(() => {
    console.log("render")
  
  }, [date])
  
  // props

  
  return (
    <>
           <input type ='date' className='date-input' onChange={(e) => setDate(e.target.value) } />
           <DateDisplay date={date}/>
    </>
  )
}

export default DateContainer