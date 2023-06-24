import React, {createContext, useEffect, useState} from 'react'

// data
import {roomData} from '../data'

// create context
export const RooomContext = createContext()


const RoomContext = ({children}) => {

  const [rooms, setRooms] = useState(roomData)
  console.log(rooms)

  return (
    <RooomContext.Provider value={{rooms}}>
      {children}
    </RooomContext.Provider>
  )
}

export default RoomContext