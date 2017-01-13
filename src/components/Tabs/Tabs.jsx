import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

const Tabs = (props) => {
  const components = props.tabs.map((tab) => {
    const classes = {
      [styles.tab]: true,
      [styles.active]: tab.isActive,
    };

    return (
      <button
        className={classNames(classes)}
        disabled={tab.isActive}
        key={tab.key}
        onClick={tab.onClick}
      >
        {tab.name}
      </button>
    );
  });

  return (
    <div className={styles.tabGroup}>
      {components}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
  })).isRequired,
};

export default Tabs;
