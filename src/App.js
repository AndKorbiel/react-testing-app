import './App.css';
import React from 'react';
import Cart from './components/Cart';
import Loader from './components/Loader';
import ServicesList from './components/ServiceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Badge, Container, Row, Col} from "react-bootstrap";

class App extends React.Component {
  state = {
    showCart: false,
    isLoading: true,
    servicesList: [
      {
        name: 'Test service A',
        description: 'Description of Test service A',
        price: 100
      },
      {
        name: 'Test service B',
        description: 'Description of Test service B',
        price: 50
      }
    ],
    cart: []
  }

  handleCartView = () => {
    this.setState(state => ({
      showCart: !state.showCart
    }))
  }

  addToCart = service => {
    const currentCart = this.state.cart;
    currentCart.push(service)
    this.setState({
      cart: currentCart
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }

  componentWillUnmount() {
    this.setState = state =>{
      return
    }
  }

  render() {
    const showCart = this.state.showCart ? <Cart list={this.state.cart}/> : '';

    return (
      <div className="App">
        {this.state.isLoading ?
          <Loader />
          :
            <Container>
              <Row>
                <Col>
                  {showCart}
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1>Hello world</h1>
                  <br />
                  <ServicesList servicesList={this.state.servicesList} action={this.addToCart} />
                  <br />
                  <Button onClick={() => this.handleCartView()}>Show cart</Button>
                  <p>Items in cart: <Badge bg="secondary" data-testid="items-in-cart">{this.state.cart.length}</Badge></p>
                </Col>
              </Row>
            </Container>
        }
      </div>
    );
  }
}

export default App;
