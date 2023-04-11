import React from 'react'

type buttonProps = {
    handleClick : (event : React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props : buttonProps) => {
  return (
    <div>
        <button onClick = {props.handleClick}>Click me !!</button>
    </div>
  )
}
