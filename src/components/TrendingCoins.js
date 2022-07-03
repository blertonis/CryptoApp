import {Route,Switch,Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import useFetch from './useFetch';



const TrendingCoins = () =>{
    const {data,isPending} = useFetch("https://api.coingecko.com/api/v3/search/trending")


        const substr = (val) => {
            let text = val.toString();
            return text.substring(0,10);
        }
    const history = useHistory();
const handleRowClick = (row) => {
    history.push(`/viewcoin/${row}`);}  



     

    return(<div>

        <h1>Trending last 24 hours</h1>
             <table border="1" className="tb">
    <thead>
    <td>Rank</td>
        <td>Symbol</td>
        <td>Name</td>
        <td>Price(BTC)</td>
      
    </thead>

    {data && data.coins.map((f) => (
       <tr onClick={() => handleRowClick(f.item.id)}>
        <td className="rank">{f.item.market_cap_rank}</td>
       <td><img src={f.item.small}></img></td>
       <td>{f.item.name}</td>
        
       <td>{substr(f.item.price_btc)}</td>           
        
       </tr>
  ))}
        
          

         
       
      </table>


      
             
      
        
    </div>)
}

export default TrendingCoins;