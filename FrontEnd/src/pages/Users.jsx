import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/user.service'
import UserCard from '../components/UserCard'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(function(){
        async function getAllUsers(){
            let response = await getUsers()
            setUsers(response)
        }
        getAllUsers()

        console.log(users)
    },[])



  return (
    <div>
        {users?.map(function(user, indice){
            return (
                
                <UserCard key={indice} user={user} />

            )
        })}
    </div>
  )
}

export default Users