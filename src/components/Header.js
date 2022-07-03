import {Link} from 'react-router-dom';

const Header = ({darkheader}) =>{
    return(<>
        <div class="header">
                    <div id="logo">
                <h1 className="highlight">CryptoApp</h1>

                    </div>

                    <div id="search">
                     <ul>
                        <li><Link to="/trending">Trending</Link></li>
                      
                     </ul>
                    </div>
                </div>
       
    </>)
}

export default Header;