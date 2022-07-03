import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {detectPositive} from '../Functions';
const  ViewCoin = ()=>{

    const {id} = useParams();
    const {data: cryptos,isPending} = useFetch("https://api.coingecko.com/api/v3/coins/" + id);
    


    return(
        <>
        <div class="qwerty-1">
			<div class="symbol-icon">
			
			<span class="bold">
			Symbol
			</span>
			<span>
			
			{cryptos && cryptos.symbol.toUpperCase()}
			</span>
			
			</div>
			<div><span class="rank-coin">
			{ cryptos && cryptos.market_cap_rank}
			</span></div>
			<div class="symbol-icon">
			<span class="bold">PRICE</span>
			<span>${cryptos && cryptos.market_data.current_price.cad.toLocaleString()}</span>
			</div>
			

            </div> 
            <br></br>

		<div class="qwerty-2">
			<div class="symbol-icon">
			
			<span class="bold">
			Total Volume
			</span>
			<span>
			${cryptos && cryptos.market_data.total_volume.cad.toLocaleString()}
			
			</span>
			
			</div>
		<div class="symbol-icon">
			<span class="bold">Circulating Supply</span>
			<span>	$1B</span>
			</div>
			
			
			
	</div>



	<div class="qwerty-3">
			
		<div class="symbol-icon">
			<span class="bold">USD</span>
			<span>${cryptos && cryptos.market_data.current_price.usd.toLocaleString()}</span>
			</div>
			

			<div class="symbol-icon">
			<span class="bold">EUR</span>
			<span>€{cryptos && cryptos.market_data.current_price.eur.toLocaleString()}</span>
			</div>

			<div class="symbol-icon">
			<span class="bold">CAD</span>
			<span>${cryptos && cryptos.market_data.current_price.cad.toLocaleString()}</span>
			</div>


			<div class="symbol-icon">
			<span class="bold">GBP</span>
			<span>£{cryptos && cryptos.market_data.current_price.gbp.toLocaleString()}</span>
			</div>
			
			
	</div>
		<br></br>

	<div class="qwerty-3">
			
		<div class="symbol-icon">
			<span class="bold">1H</span>
			<span>{cryptos && detectPositive(cryptos.market_data.price_change_percentage_1h_in_currency.usd)}</span>			</div>
			

			<div class="symbol-icon">
			<span class="bold">24H</span>
			<span>{cryptos && detectPositive(cryptos.market_data.price_change_percentage_24h_in_currency.usd)}</span>
			</div>

			<div class="symbol-icon">
			<span class="bold">7D</span>
			<span>{cryptos && detectPositive(cryptos.market_data.price_change_percentage_7d_in_currency.usd)}</span>
			</div>


			<div class="symbol-icon">
			<span class="bold">30D</span>
			<span>{cryptos && detectPositive(cryptos.market_data.price_change_percentage_30d_in_currency.usd)}</span>
			</div>
			
			
	</div>

	

			
      
        </>

        

        
    )
}

export default ViewCoin;