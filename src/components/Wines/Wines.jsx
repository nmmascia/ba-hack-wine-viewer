import React, { PropTypes } from 'react';

import WineViewer from 'components/WineViewer';

import { WINE_VIEWER_KEYS } from 'constants/wine-viewer-types';

const Wines = (props) => {
  return (
    <WineViewer
      currentWineTab={props.currentWineTab}
      changeWineTab={props.changeWineTab}
    />
  );
};

Wines.propTypes = {
  currentWineTab: PropTypes.oneOf(WINE_VIEWER_KEYS).isRequired,
  changeWineTab: PropTypes.func.isRequired,
};

export default Wines;
