import React from "react"

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "="
}

const Key = props => {
  return (
    <button
      className={`button ${isOperator(props.value) ? null : 'operator'}`}
      onClick={() => props.handleClick(props.value)}
    >
      {props.value}
    </button>
  )
}

export default Key
