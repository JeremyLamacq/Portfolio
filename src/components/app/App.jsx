import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../homePage/HomePage';
import ErrorPage from '../error/ErrorPage';
import Skills from '../skills/Skills';
import Experience from '../experience/Experience';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import LoadingComponent from '../loadingComponent/LoadingComponent';
import Projets from '../projets/Projets';


const App = () => {

  return (
    <>
      <LoadingComponent />
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projets' element={<Projets />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
       </Routes>
      <Footer />
    </>
  )
}

export default App
