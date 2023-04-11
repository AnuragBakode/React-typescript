import React from 'react'

type personListProps = {
    nameList : {first : string , last : string}[]
}

export const PersonList = (props : personListProps) => {
  return (
    <div>
        {props.nameList.map(person => <h2 key = {person.first}>{person.first} {person.last}</h2>)}
    </div>
  )
}
