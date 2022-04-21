import { Link } from 'react-router-dom';
import btcsvg from '../img/bitcoin.svg';
import ethsvg from '../img/ethereum.svg';
import erc20svg from '../img/erc20.svg';
import trc20svg from '../img/trc20.svg';
import solsvg from '../img/Solana.svg';

const Home = () => {
    return (
        <>
            <span className="crypto_text text1">Благодарна каждому за поддержку и вклад 
                        в развитие стримов!</span>
            <span className="crypto_text text2">Мне очень приятно ❤️</span>
            <span className="crypto_text text3">Донаты на стриме не показываются</span>
            <Link to="/bitcoin" className="item item1" ><img src={btcsvg} alt="Bitcoin" width="270" height="90"/></Link>
            <Link to="/ethereum" className="item item2" ><img src={ethsvg} alt="Ethereum" width="270" height="90"/></Link>
            <Link to="/erc20" className="item item3" ><img src={erc20svg} alt="USDT" width="270" height="90"/></Link>
            <Link to="/trc20" className="item item4" ><img src={trc20svg} alt="USDT" width="270" height="90"/></Link>
            <Link to="/solana" className="item item5" ><img src={solsvg} alt="Solana" width="270" height="90"/></Link>
        </>
    )
}

export {Home}