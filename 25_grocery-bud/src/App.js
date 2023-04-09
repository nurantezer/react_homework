import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return {...item, title: name}
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to list')
      const newItem = { id: new Date().getItem().toString(), title: name }
      
      setList([...list, newItem])
      setName('')
    }

  }
  
  return (
    <section className="section-center">
      <form onClick={handleSubmit} className="grocery-from"></form>
    </section>
  )
}

export default App
