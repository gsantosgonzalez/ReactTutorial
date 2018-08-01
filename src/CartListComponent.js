import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem, Left, Thumbnail, Body, Right, Button, Icon } from 'native-base';
import CartListItemComponent from './CartListItemComponent';

class CartListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { items } = this.props;

    return (
      <CartListItemComponent items={ items }/>
    );
  }
}

export default CartListComponent;
