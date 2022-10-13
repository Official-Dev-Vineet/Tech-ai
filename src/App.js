import {BrowserRouter, Routes , Route, Link} from 'react-router-dom'
import './style.css'
import Navbar from './component/Navbar';
import Home from './Pages/Home/Home'
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Document from './Pages/document/Document';
import {AiOutlineHome} from 'react-icons/ai'
import Footer from './component/Footer';
import Project from './Pages/project/Project';
import Services from './Ui/Services';
import AI from './Ui/AI'
import Data from './Ui/Data'
import Details from './Ui/Details'
const App = () => {
return(
   <BrowserRouter >
   <Navbar />
   <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} /> 
      <Route path='document' element={<Document />} />
      <Route path='projects' element={<Project />} />
      <Route path='services/:param' element={<Services />} />
      <Route path='tech-ai-serve/:ai' element={<AI />} />
      <Route path='about-us/:data' element={<Data />} />
      <Route path='site-details/:details' element={<Details />} />
      <Route path='*' element={<div className='notFound_container flex-center flex-column flex-gp-sm'><h2 className='theme-text'>404 page not found </h2> <Link to='home' className='flex-center gap-sm'>go to home <AiOutlineHome /></Link></div>} /> 
   </Routes>
   <Footer />
   </BrowserRouter>
)
}
 
export default App;
