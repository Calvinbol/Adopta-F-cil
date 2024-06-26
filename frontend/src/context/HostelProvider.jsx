import { useEffect, useState } from "react";
import { HostelContext } from "./hostelContext";
import { getMyProfileContext } from "../Services/hostel.service";


const HostelProvider = ({ children }) => {
  const [hostel, setHostel] = useState(""); // Puedes inicializarlo con un valor por defecto


  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token')
      if (token) {
          const response = await getMyProfileContext()
          setHostel(response)

      }
    }
    fetchProfile()
  }, [])

  return (
    <HostelContext.Provider value={{ hostel, setHostel }}>
      {children}
    </HostelContext.Provider>
  );
};





export default HostelProvider;