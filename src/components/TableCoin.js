import {Route,Switch,Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";




const TableCoin = ({cryptos}) =>{

    const history = useHistory();
const handleRowClick = (row) => {
    history.push(`/viewcoin/${row}`);}  


    const detectPositive = (val) =>{
        let check = Math.sign(parseFloat(val));
         if(check==-1){
             return <span className="neg">{val}%</span>
         } else if(check==1){
            return <span className="pos">{val}%</span>;
         }
     }

     

    return(<div>
<table border="1">
    <thead>
        <td className="text-center">Rank</td>
        <td>Symbol</td>
        <td>Name</td>
        <td>Price</td>
        <td>24/h Change</td>
        <td className="hide-mobile"> Volume</td>
        <td className="mrk_cap hide-mobile">Circulating Supply</td>

    </thead>
            {cryptos?.map((f) => (
       
               
            <tbody>


<tr onClick={()=> handleRowClick(f.id)} >
               
<td className="rank">{f.market_cap_rank}</td>


        <td><img src={f.image}></img></td>
        <td>{f.name}</td>
        <td>${f.current_price.toLocaleString()}</td>

        <td>{detectPositive(f.price_change_percentage_24h.toFixed(2))}</td>
        <td className="hide-mobile">${f.total_volume.toLocaleString()}</td>
        <td className="mrk_cap hide-mobile">${f.market_cap.toLocaleString()}</td>
        
  
    </tr>
            </tbody>
   
))}
         
       
      </table>

    </div>)
}

export default TableCoin;