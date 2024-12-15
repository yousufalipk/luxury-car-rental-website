import React, { createContext, useContext, useState, useEffect } from "react";


const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);


export const UserProvider = (props) => {

    const [isAuth, setIsAuth] = useState(false);
    const [sideMenu, setSideMenu] = useState(false);


    return (
        <UserContext.Provider value={{
            isAuth,
            setSideMenu,
            sideMenu
        }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;