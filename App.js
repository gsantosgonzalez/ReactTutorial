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

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          description: 'USB Mac',
          qty: 1,
          unit_price: 5000,
          total: 5000
        },
        {
          id: 2,
          description: 'Teclado Mac',
          qty: 1,
          unit_price: 3000,
          total: 3000
        }
      ]
    }
  }
  keyExtractor(item: object, index: number) {
    return String(item.id)
  };
  renderItem({ item }) {
    return (
        <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: 'https://via.placeholder.com/350x350' }} />
        </Left>
        <Body>
          <Text>{ item.qty } - { item.description }</Text>
          <Text note numberOfLines={1}>{ item.total }</Text>
        </Body>
        <Right>
          <Button transparent>
          <Icon name='trash' />
          </Button>
        </Right>
      </ListItem>
    )
  }
  getTotal() {

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
          <H3>
            Item List
          </H3>
          <FlatList
            data={ this.state.items }
            keyExtractor={ this.keyExtractor }
            renderItem={ this.renderItem }
          />
          <Card>
            <CardItem header>
              <Text>Checkout</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Total: ${ this.getTotal }
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button>
                <Text>Checkout</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
