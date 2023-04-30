import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './PriviteRouter'
import SingleMovie from '../pages/SingleMovie'
import Home from '../pages/Home'

const AppRouter = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='movies/:id' element={<PrivateRouter />} />
                <Route path='' element={<SingleMovie/>} />
            </Routes>
        
        </BrowserRouter>
    )

}

export default AppRouter