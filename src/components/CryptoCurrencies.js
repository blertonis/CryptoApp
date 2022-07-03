import Crypto from "./Crypto";
import Header from './Header';

const CryptoCurencies = ({crypto}) =>{

    return(<div>
         
        <div className="thead">
            <div>#</div>
            <div className="coincol">Coin</div>
            <div>Price</div>
            <div>24h</div>
            <div>Volume</div>
            <div>Market Cap</div>
        </div>
    
        <Crypto cryptos={crypto}></Crypto>
    </div>
    
    )

   

}

export default CryptoCurencies;

