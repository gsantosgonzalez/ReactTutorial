//import liraries
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, H3 } from 'native-base';
import CartListComponent from './CartListComponent';
import CartCheckoutComponent from './CartCheckoutComponent';

// create a component
class CartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartTotal: 0,
      items: [
        {
          id: 1,
          description: 'Teclado Mac',
          unit_price: 2500,
          qty: 2,
          total: 2500
        },
        {
          id: 2,
          description: 'Trackpad Mac',
          unit_price: 2300,
          qty: 3,
          total: 2300
        }
      ]
    };
  }

  render() {
    return (
      <Content padder>
        <H3>
          Item List
        </H3>
        <CartListComponent items={ this.state.items }/>
        <CartCheckoutComponent items={ this.state.items }/>
      </Content>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default CartComponent;

