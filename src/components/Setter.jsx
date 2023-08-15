import React from 'react'

const Setter = props => {
  return (
    <form className='setter centered wider' onSubmit={props.setValue}>
          <input id='newVal' type='text' placeholder='input value here'></input>
          <button>Set Count</button>
        </form>
  )
}

export default Setter