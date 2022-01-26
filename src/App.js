import './App.css';
import React from 'react';
import Cart from './components/Cart';
import Loader from './components/Loader';
import ServicesList from './components/ServiceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Badge, Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {addToCart, clearStore, removeFromCart} from "./redux/actions";

class App extends React.Component {
  state = {
    showCart: false,
    isLoading: true,
  }

  handleCartView = () => {
    this.setState(state => ({
      showCart: !state.showCart
    }))
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
    this.props.clearStore()
    this.setState = () => {
      return
    }
  }

  render() {
    const showCart = this.state.showCart ? <Cart list={this.props.cart} remove={this.props.removeFromCart} /> : '';

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
                  <ServicesList servicesList={this.props.servicesList} action={this.props.addToCart} />
                  <br />
                  <Button onClick={() => this.handleCartView()}>Show cart</Button>
                  <p>Items in cart: <Badge bg="secondary" data-testid="items-in-cart">{this.props.cart.length}</Badge></p>
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
    servicesList: state.servicesList,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: service => dispatch(addToCart(service)),
    removeFromCart: (service, index) => dispatch(removeFromCart(service, index)),
    clearStore: () => dispatch(clearStore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
