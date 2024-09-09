import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import Header from '../header/Header';
import Contact from '../contact/Contact';
import Skills from '../skills/Skills';
import Experience from '../experience/Experience';
import Footer from '../footer/Footer';
import ErrorPage from '../error/ErrorPage';
import LoadingComponent from '../loadingComponent/LoadingComponent';
import Projets from '../projets/projets';


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
