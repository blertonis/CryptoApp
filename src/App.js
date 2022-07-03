import {useState} from 'react'
import CryptoCurrencies from './components/CryptoCurrencies';
import Crypto from './components/Crypto';
import useFetch from './components/useFetch';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import ViewCoin from './components/ViewCoin';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import TableCoin from './components/TableCoin';
import Trending from './components/Trending';
import TrendingCoins from './components/TrendingCoins';

function App() {
  
  const [url,setUrl] = useState("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false");
  const {data: cryptos,isPending} = useFetch(url);
  const {data:trending,isPending:trendpend} = useFetch("https://api.coingecko.com/api/v3/search/trending")
  const [load,setLoad] = useState(20);
  const [firstLoad,setFirstLoad] = useState(true);

  const loadMore = ()=>
  {
      
      if(firstLoad){
        setLoad(load + 40);

        console.log(load);

        setUrl("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false");
        setFirstLoad(false);
      } else{
        setLoad(load + 20);
        setUrl("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=" + load + "&page=1&sparkline=false");
      }
    
  }
  return (<>
        
   
    <Switch>
      <Route exact path="/">
      <div className="container">

      <Header/>
        {isPending && <h1>Loading...</h1>}

      {crypto && <TableCoin cryptos={cryptos}></TableCoin>}
    <div className="container-middle">
    <button onClick={loadMore}>Load More</button>
    </div>
</div>
    

      </Route>

      <Route exact path="/viewcoin/:id">
        <div id="aaaa">
      <div className="container">

      <Header/>
      </div>
        </div>
        <ViewCoin/>
     
      </Route>



      <Route path="/trending">
    <div className="container">
    <Header/>
    <TrendingCoins></TrendingCoins>
    </div>
    
      </Route>

    </Switch>
   
    </> );

}

export default App;
