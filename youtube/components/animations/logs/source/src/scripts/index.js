/* global document */

import { print } from 'dom-cat';
import { mainLogs } from './logs';

import '../styles/styles.less';

print(
    document.querySelector('.terminal'),
    mainLogs,
    30
);
