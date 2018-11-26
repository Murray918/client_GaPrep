import React, { Component } from 'react';
import Msg from './msg'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: ''
    }
  }
  componentWillMount(){
    console.log(this)
  }

  async componentDidMount() {
    console.table(this)
    const response = await fetch(`http://localhost:8088`);
    const json = await response.json();
    this.setState({ msg: json });
    console.log(<Msg />)
  }

  render() {


    return (
      <div>
        <Msg msg={this.state.msg.msg} />
        <div>
          <button>
            CLICK ME
          </button>
        </div>
      </div>
    );
  }
}
console.log(<App/>)
export default App;
