import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import Favicon from 'react-favicon';

import Home from './Home/Home';

export default function() {
  return (
    <div className={styles.back}>
      <Favicon url="https://raw.githubusercontent.com/wenghengcong/iOS-Compass/master/images/favicon.ico" />
      <Home></Home>
    </div>
  );
}

// ReactDOM.render(<Home />, document.getElementById('root'));
