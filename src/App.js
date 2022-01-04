
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';

import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import ForgotPassword from './Components/Recover/ForgotPassword';
import Signin from './Components/Signpage/Signin';
import Signup from './Components/Signpage/Signup';
import TermsCondition from './Components/Signpage/TermsCondition';

function App() {
  return (
<>
<Routes>
  <Route path='/kaay-amo' index element={<Home/>}/>
  <Route path='/Signin'  element={<Signin/>}/>
  <Route path='/Signup'  element={<Signup/>}/>
  <Route path='/Signin/Terms&Conditions' element={<TermsCondition/>}/>
  <Route path='/Signup/Terms&Conditions' element={<TermsCondition/>}/>
  <Route path='/Signin/ForgotPassword' element={<ForgotPassword/>}/>


{/* <Home/> */}
{/* <Signin/> */}
{/* <Signup/> */}
{/* <TermsCondition/> */}
{/* <Footer/> */}
</Routes>
</>
  );
}

export default App;
