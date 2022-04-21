import { Outlet } from 'react-router-dom';
import '../index.css';
import logo from '../img/gensyxa_logo.png';

const Layout = () => {
  
  
  return (
        <>
            <div className="app">
        <div className="header">
          <div className="header_logo">
              <img src="" alt=""/>
          </div>
        </div>
        <div className="main">
           <div className="channel_logo">
                <a href='#' target='_blank' rel='noreferrer noopener'><img src={logo} width="200" alt=""/></a>
           </div>
          <div className="container">

                <div className="cryptocurrencies_list">

                    <Outlet />

                </div>

          </div>
        </div>
    </div>
        <div className="footer">
          <div className="madeby">
            <a className='tglink' href='#' target='_blank' rel='noreferrer noopener'>@</a>
          </div>
        </div>
        </>
    )
}

export {Layout}