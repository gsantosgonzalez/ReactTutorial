//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Body, Button, Card, CardItem } from 'native-base';

// create a component
class CartCheckoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getTotal(items) {
    let total = 0;
    for (let index = 0; index < items.length; index++) {
      total += items[index].qty * items[index].unit_price;
    }
    return total;
  }

  render() {
    const { items } = this.props;

    return (
      <Card>
        <CardItem header>
          <Text>Checkout</Text>
        </CardItem>
        <CardItem>
          <Body>
          <Text>
            Total: ${ this.getTotal(items) }
          </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Button>
            <Text>Checkout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

//make this component available to the app
export default CartCheckoutComponent;
