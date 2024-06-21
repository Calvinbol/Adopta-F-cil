import React, { useEffect, useState } from 'react'
import './PetsView.css'
import { useParams } from 'react-router-dom'
import { getAllMascotas } from '../../Services/pets.service'


function PetsView() {
  const [pets, setPets] = useState([])
  const {animal} = useParams()
  const [animalFilter, setAnimalFilter] = useState(animal)

  console.log(animalFilter)

  const animalString = animal.charAt(0).toUpperCase() + animal.slice(1)

  useEffect(function(){
    async function getAllAnimals (){
      console.log(animalFilter.slice(0, -1))
      if (animalFilter === 'perros' || animalFilter === 'gatos' ){
        const response = await getAllMascotas(`?type=${animalFilter.slice(0,-1)}`)
        setPets(response)
        console.log(pets)

      } else {
        const response = await getAllMascotas('{}')
        setPets(response)
      }

    }

    getAllAnimals()
  }, [])

  return (
    <div className="pets-container">
      <h1>{animalString} en adopción</h1>
      <div className="pets-links">

        {
          pets.length > 0 && pets.map((pet, i) => (
            <div key={i} className='card'>
              <p>{pet.name}</p>
              <p>{pet.race}</p>
              <p>{pet.age}</p>
              <p>{pet.size}</p>

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default PetsView