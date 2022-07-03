import {Route,Switch,Link} from 'react-router-dom';
const Crypto = ({cryptos}) =>{

    const detectPositive = (val) =>{
       let check = Math.sign(parseFloat(val));
        if(check==-1){
            return <span className="neg">{val}%</span>
        } else if(check==1){
           return <span className="pos">{val}%</span>;
        }
    }

  
    return(
    
    <>
    
    {cryptos?.map((f) => (
        <Link to={`/viewcoin/${f.id}`}>
        <div className="thead crypto-list">
        <div>{f.market_cap_rank}</div>
        <div className="coincol"><img src={f.image}></img> {f.name}</div>
        <div>${f.current_price.toLocaleString()}</div>

        <div>{detectPositive(f.price_change_percentage_24h.toFixed(2))}</div>
        <div>${f.total_volume.toLocaleString()}</div>
        <div>${f.market_cap.toLocaleString()}</div>
    </div>
    </Link>
))}

    </>


);


}

export default Crypto;