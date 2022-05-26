import React, { createContext, useEffect, useReducer } from "react";
import appReducer from "./AppReducer";
import axios from "axios";

const initialContext = {
  currentCustomer: "",
  listClients: {
    loading: true,
    list: {
      "customers": [
        {
          "id": "512.536.530-03",
          "name": "Camila Souza",
          "email": "camila.souza@email.com",
          "phone": "(11) 93463-2347",
          "status": "active"
        },
        {
          "id": "397.553.820-11",
          "name": "Pedro Ferreira",
          "email": "peferreira@email.com",
          "phone": "(11) 95529-5678",
          "status": "inactive"
        },
        {
          "id": "921.818.210-20",
          "name": "Marcela Silva",
          "email": "masilva@email.com",
          "phone": "(11) 93470-3391",
          "status": "waiting"
        },
        {
          "id": "533.278.870-39",
          "name": "Carlos Ferraz",
          "email": "carlosferraz@email.com",
          "phone": "(11) 96744-0233",
          "status": "disabled"
        }
      ]
    }
  }
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialContext);

  const setCurrentCustomer = (customer) => {
    dispatch({ payload: customer, action: "currentCustomer" });
  }

  const getClients = () => {

    axios.get("https://reqres.in/api/products/3", {
      withCredentials: false,
    }).then(res => {
      console.log(res, "dsadasdasd")
    })
  }

  useEffect(() => {
    getClients()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        getClients,
        setCurrentCustomer
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext as default, AppProvider };
