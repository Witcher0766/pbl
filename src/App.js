import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Home, Profile } from './pages';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/*' element={ <Home/> } />
      <Route path='/profile' element={ <Profile/> } />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
