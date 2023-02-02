import React, { Fragment, useState } from 'react'
import './HelloWorld.css'

function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(false)

  const toggleTrue = () => {
    setIsTrue(!isTrue)
  }

  return (
    <Fragment>
      <hr />
      <h1 className="h1-green">{props.msg}</h1>
      <hr />

      {isTrue && (
        <Fragment>
          <p>The current value of isTrue is true</p>
          <hr />
        </Fragment>
      )}

      {isTrue ? <p>Is true</p> : <p>Is false</p>}

      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
        Toggle isTrue
      </a>
    </Fragment>
  )
}

export default HelloWorld
