import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [laoding, setLaoding] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const mounted = useRef(false)
  const [newImages, setNewImages] = useState(false)

  const fetchImages = async () => {
    setLaoding(true)
    let url;
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    if (query) {
       url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results
        } else if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })
      setNewImages(false)
      setLaoding(false)
    } catch (error) {
      setNewImages(false)

      setLaoding(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [page])
  
  return <h2>stock photos starter</h2>
}

export default App
