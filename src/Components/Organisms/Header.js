import React,{Component} from 'react';
import Search from '../Pages/Search'
import addSong from '../Pages/addSong'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Header extends Component {
  render()
  {
    return (
      <Router>
        <div>
          <nav className="header">
            <h1>Music App</h1>
            {/* links for routing */}
            <Link className="link" to="/search">Search Page</Link>
            <Link className="link" to="/addSong">Add Song!</Link>
            
          </nav>
          <Route exact path="/search" component={Search} />
          <Route path="/addSong" component={addSong} />
        </div>
      </Router>
    );
  }
  }
  
export default Header;



