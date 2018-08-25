import React, { Component } from 'react';
import Client, { Cookies, Graphql } from '../src';
import config from '../src/config';

Cookies.set(config.cookie.authorization.name, '1234567890abcdefghijklmnopqrstuvwxyz');
Cookies.set(config.cookie.server.name, 'https://w5xlvm3vzz.lp.gql.zone/graphql');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentWillMount() {
    this.fetch();
  }

  fetch() {
    Client.query({
      query: Graphql`
        {
          rates(currency: "USD") {
            currency
          }
        }
      `,
    }).then(result => this.setState({ data: result.data.rates }));
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default App;
