import './App.css';
import React from 'react';
import Cart from './components/Cart';
import Loader from './components/Loader';
import ServicesList from './components/ServiceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Badge, Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";

class App extends React.Component {
  state = {
    showCart: false,
    isLoading: true,
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

  removeFromCart = (service, index) => {
    const currentCart = this.state.cart;
    const updatedCart = currentCart.filter((el, elIndex) => {
      return elIndex !== index
    })

    this.setState({
      cart: updatedCart
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
    const showCart = this.state.showCart ? <Cart list={this.state.cart} remove={this.removeFromCart} /> : '';

    return (
      <div className="App">
        {this.state.isLoading ?
          <Loader />
          :
            <Container>
              <Row>
                <h1>{this.props.value}</h1>
                <Col>
                  {showCart}
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1>Hello world</h1>
                  <br />
                  <ServicesList servicesList={this.props.servicesList} action={this.addToCart} />
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

const mapStateToProps = state => {
  return {
    servicesList: state.servicesList
  }
}

export default connect(mapStateToProps)(App);
