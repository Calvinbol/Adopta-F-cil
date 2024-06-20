import { useState } from "react";
import { HostelContext } from "./hostelContext";


const HostelProvider = ({ children }) => {
  const [hostel, setHostel] = useState(""); // Puedes inicializarlo con un valor por defecto

  return (
    <HostelContext.Provider value={{ hostel, setHostel }}>
      {children}
    </HostelContext.Provider>
  );
};

export default HostelProvider;
