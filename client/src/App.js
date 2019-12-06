import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state ={
    name: "",
    id: "",
    country: "",
    list: []
  };

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then (responce => {
      console.log(responce);
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
      <div>
        test
      </div>
    );
  }
}


export default App;



