import moment from 'moment'
import React from 'react'
import './date.css'

const DateDisplay = (props) => {
  const {date} = props
  return (
    <section className='date-display'>
      My date is: {moment(date).format('LL')}
    </section>
  )
}

export default DateDisplay