/* @flow */

import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class OfferList extends Component{

  constructor() {
    super();
  }

  render() {

    const {data: {loading, allOffers}} = this.props;

    if (loading) {
      return (<Text>Loading</Text>)
    }

    console.log(this);

    return (
      <Container>
               <Header>
                   <Left>
                       <Button transparent>
                           <Icon name='menu' />
                       </Button>
                   </Left>
                   <Body>
                       <Title>Header</Title>
                   </Body>
                   <Right />
               </Header>

               <Content>
                 {allOffers.map(offer => (
                   <Text key={offer.id}>{offer.title}</Text>
                 ))}
               </Content>

               <Footer>
                   <FooterTab>
                       <Button full>
                           <Text>Footer</Text>
                       </Button>
                   </FooterTab>
               </Footer>
      </Container>
    )
  }
}


OfferList.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    allOffers: PropTypes.array,
  }).isRequired,
  router: React.PropTypes.object
};


export default OfferList;
