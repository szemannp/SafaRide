/* @flow */

import React from 'react';
import { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class GeneralComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('GeneralComponent DID MOUNT');
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}

const mapStateToProps = state => {
  return {
    // messages: state.getIn(['messages']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addMessage: message => {
    //   dispatch(addMessage(message));
    // },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralComponent);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
