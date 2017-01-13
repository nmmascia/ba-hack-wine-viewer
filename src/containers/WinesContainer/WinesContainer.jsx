import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WinesViewer from 'components/WinesViewer';

import { changeWineType } from 'reducers/wines-viewer';

import { WINE_VIEWER_KEYS } from 'constants/wine-viewer-types';

class WinesContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentWineTab: PropTypes.oneOf(WINE_VIEWER_KEYS).isRequired,
  };

  changeWineType(wineType) {
    const { dispatch } = this.props;
    dispatch(changeWineType(wineType));
  }

  render() {
    return (
      <WinesViewer
        currentWineTab={this.props.currentWineTab}
        changeWineTab={::this.changeWineType}
      />
    );
  }
}

export default connect((state, props) => {
  return {
    currentWineTab: state.winesViewer.wineType,
  };
})(WinesContainer);
