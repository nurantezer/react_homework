import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
import useFetch from './useFetch'
const API_KEY = "fcacb142"
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
