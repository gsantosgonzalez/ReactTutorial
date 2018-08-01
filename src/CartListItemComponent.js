//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem, Left, Thumbnail, Body, Right, Button, Icon } from 'native-base';

// create a component
class CartListItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  keyExtractor(item, index) {
    return String(item.id)
  }

  renderItem(product) {
    const { item } = product;

    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: 'https://via.placeholder.com/350x350' }} />
        </Left>
        <Body>
          <Text>{ item.qty } - { item.description } | ${ item.unit_price }</Text>
          <Text note numberOfLines={1}>Total: ${ item.qty * item.unit_price }</Text>
        </Body>
        <Right>
          <Button transparent>
          <Icon name='trash' />
          </Button>
        </Right>
      </ListItem>
    );
  }

  render() {
    const { items } = this.props;

    return (
      <FlatList
        data={ items }
        keyExtractor={ this.keyExtractor }
        renderItem={ this.renderItem }
      />
    );
  }
}

export default CartListItemComponent;
