/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, FlatList} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, H3, ListItem, Thumbnail, Card, CardItem } from 'native-base';
import CartComponent from './src/CartComponent';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='cart' />
            </Button>
          </Left>
          <Body>
            <Title>Shopping Cart</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <CartComponent/>
        </Content>
      </Container>
    );
  }
}
