import { useState } from 'react'
import { HostelContext } from "./context/hostelContext.js";



function home() {
  const [hostel, setHostel] = useState('')


  return (
    <>
      <HostelContext.Provider value = {{hostel, setHostel}}>

      </HostelContext.Provider>
    </>
  )
}

export default home