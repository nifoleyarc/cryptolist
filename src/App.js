import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Bitcoin } from './components/bitcoinpage';
import { ERC20 } from './components/erc20page';
import { TRC20 } from './components/trc20page';
import { Home } from './components/mainpage';
import { Solana } from './components/solanapage';
import { Ethereum } from './components/ethereumpage';
import { Notfound } from './components/notfoundpage';
import { Layout } from './components/Layout'
import ClipboardJS from 'clipboard';
import { useRef } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="bitcoin" element={<Bitcoin />}/>
          <Route path="ethereum" element={<Ethereum />}/>
          <Route path="erc20" element={<ERC20 />}/>
          <Route path="trc20" element={<TRC20 />}/>
          <Route path="solana" element={<Solana />}/>
          <Route path="*" element={<Notfound />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
