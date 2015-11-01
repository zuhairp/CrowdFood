import React from 'react';

import { Button, Glyphicon, Input } from 'react-bootstrap';

export default class SearchBar extends React.Component {
  static propTypes = {
    onSearch: React.PropTypes.func,
  }

  constructor() {
    super();
    this.state = {value: ''};
  }

  handleChange() {
    this.setState({
      value: this.refs.input.getValue(),
    });
  }

  handleSearchClick() {
    this.props.onSearch(this.state.value);
  }

  render() {
    const searchButton = (
      <Button onClick={this.handleSearchClick.bind(this)}>
      <Glyphicon glyph="search" />
      </Button>
    );
    return (
      <Input
        type="text"
        value={this.state.value}
        placeholder="I want to eat..."
        ref="input"
        onChange={this.handleChange.bind(this)}
        buttonAfter={searchButton}
      />
    );
  }
}
