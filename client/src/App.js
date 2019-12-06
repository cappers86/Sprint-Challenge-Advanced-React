import React from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      playerData: []
    }
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then (responce => {
      console.log(responce);
      this.setState({
        playerData: responce.data
    })
  })
  .catch(error => console.log(error));
    
  }
  handleChanges = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      
      <div className="players">
        <div><NavBar /></div>
      {this.state.playerData.map(players => (
        
        
          <div key={players.id}>
            
          <h1>{players.name}</h1>
          <h2>{players.country}</h2>
          <h2>{players.searches}</h2>

        </div>
      ))}

    </div>
    );
  }
}


export default App;



