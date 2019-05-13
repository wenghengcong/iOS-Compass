import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';

import Home from './Home/Home';

export default function() {
  return (
    <div className={styles.back}>
      <Home></Home>
    </div>
  );
}

// ReactDOM.render(<Home />, document.getElementById('root'));
