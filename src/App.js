import './App.css';
import React from 'react';
import Cart from './components/Cart';
import Loader from './components/Loader';
import ServicesList from './components/ServiceList';

class App extends React.Component {
  state = {
    showCart: false,
    isLoading: true,
    servicesList: [
      { name: 'Service A' },
      { name: 'Service B' }
    ]
  }

  handleCartView = () => {
    this.setState(state => ({
      showCart: !state.showCart
    }))
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }

  render() {
    const showCart = this.state.showCart ? <Cart /> : '';

    return (
      <div className="App">
        {this.state.isLoading ?
          <Loader />
          :
          <>
            {showCart}
            <h1>Hello world</h1>
            <br />
            <ServicesList servicesList={this.state.servicesList} />
            <br />
            <button onClick={() => this.handleCartView()}>Show cart</button>
          </>
        }
      </div>
    );
  }
}

export default App;
