import './App.scss';
import { Route, Routes } from 'react-router-dom';
// import Loading from '../loading/Loading';
import HomePage from '../homePage/HomePage';
import Header from '../header/Header';
import Contact from '../contact/Contact';
import Skills from '../skills/Skills';
import Experience from '../experience/Experience';
import Footer from '../footer/Footer';
import ErrorPage from '../error/ErrorPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<HomePage /> }/>
      </Routes>
      <Header />
        <Routes>
          {/* <Route path='/loading' element= {<Loading />} /> */}
          <Route path="*" element={<ErrorPage />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
       </Routes>
      <Footer />
    </>
  )
}

export default App
