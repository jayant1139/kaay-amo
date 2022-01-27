
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './Components/Footer';

// import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Emailsent from './Components/Recover/Emailsent';
import ForgotPassword from './Components/Recover/ForgotPassword';
import Signin from './Components/Signpage/Signin';
import Signup from './Components/Signpage/Signup';
import TermsCondition from './Components/Signpage/TermsCondition';
import Mobileverification from './Components/Verify/Mobileverification';
import Emailverification from './Components/Verify/Emailverification';

function App() {
  return (
<>
{/* <Phonewithcode/> */}
<Routes>
  <Route path='/' index element={<Home/>}/>
  <Route path='/Signin'  element={<Signin/>}/>
  <Route path='/Signup'  element={<Signup/>}/>
  <Route path='/Signin/Terms&Conditions' element={<TermsCondition/>}/>
  <Route path='/Signup/Terms&Conditions' element={<TermsCondition/>}/>
  <Route path='/Signin/ForgotPassword' element={<ForgotPassword/>}/>
  <Route path='/Signin/Emailsent' element={<Emailsent/>}/>
  <Route path='/Verify/Mobileverification' element={<Mobileverification/>}/>
  <Route path='/Verify/Emailverification' element={<Emailverification/>}/>


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
