import React, { useState, useContext } from 'react'
import sublinks from './data'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [İsSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [page, setPage] = useState({ page: '', links: [] })
    const [location, setLocation] = useState({})

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const opneSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                İsSubmenuOpen,
                opneSubmenu,
                closeSubmenu,
                page,
                location,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
