import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WinesViewer from 'components/WinesViewer';

import { setWineType, setCurrentWineId } from 'reducers/wines-viewer';
import { setNotesForWine } from 'reducers/wines';

import { WINE_VIEWER_KEYS } from 'constants/wine-viewer-types';

class WinesContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentWineTab: PropTypes.oneOf(WINE_VIEWER_KEYS).isRequired,
    currentWine: PropTypes.shape({
      dateDelivered: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      notes: PropTypes.string,
      rating: PropTypes.number,
      varietal: PropTypes.string,
      year: PropTypes.string,
    }),
    wineCursors: PropTypes.shape({
      next: PropTypes.number,
      previous: PropTypes.number,
    }).isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  handleOnWineTabClick(wineType) {
    const { dispatch } = this.props;
    dispatch(setWineType(wineType));
  }

  handleOnChangeWine(id) {
    const { dispatch } = this.props;
    dispatch(setCurrentWineId(id));
  }

  handleOnSaveTastingNotes(notes) {
    const { dispatch, currentWine } = this.props;
    dispatch(setNotesForWine(currentWine.id, notes));
  }

  renderWinesViewer() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <WinesViewer
        currentWine={this.props.currentWine}
        currentWineTab={this.props.currentWineTab}
        onWineTabClick={::this.handleOnWineTabClick}
        onSaveTastingNotes={::this.handleOnSaveTastingNotes}
      />
    );
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <button style={{ height: '50px', width: '100px' }} onClick={() => this.handleOnChangeWine(this.props.wineCursors.previous)}>Previous</button>
        {this.renderWinesViewer()}
        <button style={{ height: '50px', width: '100px' }} onClick={() => this.handleOnChangeWine(this.props.wineCursors.next)}>Next</button>
      </div>
    );
  }
}

const findCursors = (state) => {
  const wines = Object.keys(state.wines.byId).map((int) => parseInt(int, 10));
  const currentIndex = wines.indexOf(state.winesViewer.currentWineId);

  const next = currentIndex + 1 >= wines.length ? wines[0] : wines[currentIndex + 1];
  const previous = currentIndex - 1 < 0 ? wines[wines.length - 1] : wines[currentIndex - 1];

  return {
    next,
    previous,
  };
};

export default connect((state, props) => {
  return {
    currentWineTab: state.winesViewer.wineType,
    currentWine: state.wines.byId[state.winesViewer.currentWineId],
    wineCursors: findCursors(state),
    isLoading: !state.wines.byId[state.winesViewer.currentWineId],
  };
})(WinesContainer);
