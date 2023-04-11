import React from 'react'

type statusProps = {
    status : 'Loading' | 'Success' | 'Failure'
}

export const Status = (props: statusProps) => {
    let message
    if(props.status === 'Loading'){
        message = "Loading....."
    }
    else if(props.status === 'Success'){
        message = "Successfully Fetched"
    }
    else if(props.status === 'Failure'){
        message = "Failed to Fetch"
    }
    
  return (
    <div>
        {message}
    </div>
  )
}
