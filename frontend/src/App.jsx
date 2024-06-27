import { useEffect, useState } from "react";
import Gestion from "./components/Gestion";
import Table from "./components/Table";
import AddModal from "./components/AddModal";
import "./App.css";
import { getPetsByHostel } from "./Services/pets.service";

const App = () => {
  const [pets, setPets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPets, setSelectedPets] = useState([]);

  useEffect(() => {
    async function getAllPets() {
      const response = await getPetsByHostel();
      setPets(response);
      console.log(response);
    }
    getAllPets();
  }, []);

  const handleAddPet = (newPet) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0]; 
    const newPetWithIdAndDates = {
      ...newPet,
      id: pets.length + 1, 
      fecha: formattedDate,
    };
    setPets([...pets, newPetWithIdAndDates]);
    setIsModalOpen(false);
  };

  const handleDeletePets = () => {
    setPets(pets.filter((pet) => !selectedPets.includes(pet.id)));
    setSelectedPets([]);
  };

  const toggleSelectPet = (id) => {
    setSelectedPets((prevSelectedPets) =>
      prevSelectedPets.includes(id)
        ? prevSelectedPets.filter((petId) => petId !== id)
        : [...prevSelectedPets, id]
    );
  };

  return (
    <div className="App">
      <Gestion
        onAddClick={() => setIsModalOpen(true)}
        onDeleteClick={handleDeletePets}
      />
      <Table
        pets={pets}
        selectedPets={selectedPets}
        toggleSelectPet={toggleSelectPet}
      />
      <AddModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPet={handleAddPet}
      />
    </div>
  );
};

export default App;
