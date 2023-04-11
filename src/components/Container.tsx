import React from 'react'

export type containerProps = {
    styles : React.CSSProperties
}

export const Container = ({styles} : containerProps) => {
    
  return (
    <div style  = {styles}>Container Content Here</div>
  )
}


