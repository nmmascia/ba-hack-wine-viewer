import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

class TastingNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      textAreaValue: this.props.notes,
    };
  }

  handleOnEditNotes(event) {
    this.setState({
      isEditing: true,
      textAreaValue: event.target.value,
    });
  }

  handleOnSaveNotes() {
    const { textAreaValue } = this.state;
    this.setState({ isEditing: false, textAreaValue: '' });
    this.props.onSaveNotes(textAreaValue);
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Your tasting notes for {this.props.name}</h1>
        <textarea
          className={styles.textArea}
          value={this.state.isEditing ? this.state.textAreaValue : this.props.notes}
          onChange={::this.handleOnEditNotes}
        />
        <button
          className={styles.button}
          disabled={!this.state.isEditing}
          onClick={::this.handleOnSaveNotes}
        >
          Save Your Notes
        </button>
      </div>
    );
  }
}

TastingNotes.propTypes = {
  name: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  onSaveNotes: PropTypes.func.isRequired,
};

export default TastingNotes;
