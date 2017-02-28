/* @flow */

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import {connect} from 'react-redux';
import offerList from '../components/offerList';

const allOffers =  gql`
  query {
    allOffers {
      id
      title
    }
  }
`;

const mapStateToProps = (state, ownProps) => {
  return {offer: state.offer};
};


export default compose(
  graphql(allOffers),
  connect(mapStateToProps)
)(offerList);
