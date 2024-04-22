import Navigation from './components/Navigation'
import { Home, Details, NotFound, Pokemones } from './layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataProvider from './context/my_context'

const App = () => {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemones' element={<Pokemones />} />
            <Route path='/pokemones/:id' element={<Details />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App
