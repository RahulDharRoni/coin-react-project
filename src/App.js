import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage/Homepage';
import Header from './Component/Header/Header';
import Coins from './Component/Coins/Coins';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import CoinDetails from './Component/CoinDetails/CoinDetails';
import BdAddress from './Component/BdAddress/BdAddress';
import UsAddress from './Component/UsAddress/UsAddress';
import Notfound from './Component/NotFound/Notfound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path="bd-address" element={<BdAddress />}></Route>
          <Route path="us-address" element={<UsAddress />}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
