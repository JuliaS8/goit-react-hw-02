import React from 'react'
import css from './Description.module.css'

const Description = () => {
  return (
      <div>
          <h1 className={css.title}>Sip Happens Café</h1>
          <p className={css.description}>
              Please leave your feedback about our service by selecting one of the options below.
</p>
    </div>
  )
}

export default Description;