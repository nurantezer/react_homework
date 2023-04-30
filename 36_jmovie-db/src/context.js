import React, { useState, useContext, createContext } from 'react'

import useFetch from './useFetch';

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
    const [query, setQuery] = useState('batman')
    const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

    return (
        <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}

