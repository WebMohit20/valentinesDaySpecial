import ValentineInfoPage from './components/ValentineInfoPage';
import ShowImages from './components/ShowImages';
import { Route,Routes } from 'react-router-dom';

function App() {


  return (
    <div>
      <h1>Valentine's Special</h1>
      <Routes>
        <Route path='/' element={<ValentineInfoPage/>}/>
        <Route path='/greetings' element={<ShowImages/>}/>
      </Routes>
    </div>
  )
}

export default App
