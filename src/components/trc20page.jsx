import { Link } from 'react-router-dom';
import '../address.css';
import qrbtc from '../img/qr-code.png';
import { ReactComponent as Chevron } from '../img/chevron-back-outline.svg';
import { ReactComponent as CopyIcon } from '../img/copyicon.svg';
import { ReactComponent as CheckIcon } from '../img/checkicon.svg';
import ClipboardJS from 'clipboard';
import { Check } from './checkicon';
import { iconClicked } from './clicked';

const TRC20 = () => {
    new ClipboardJS(".CopyIconc");
    
    return (
        <>
            <Link to="/" className="chevronicon" ><Chevron width="45" heigth="45" /></Link>
            <span className="wallet_name">Адрес кошелька USDT</span>
            <span className="network_type">Сеть: <span className="type_color">TRC-20</span></span>
            <img className="qrcode eth" src={qrbtc} alt="QR Code Ethereum" width="200px"/>
            <div id="search"><input id="input" readonly="readonly" value="4" /><button id="button" onClick={() => { Check(); iconClicked() }}><CopyIcon data-clipboard-target="#input" className="CopyIconc" width="17" /></button>
                <div className="spinner"><CheckIcon className="CheckIconc" width="18" /></div>
            </div>
        </>
    )
}

export {TRC20}