/* global document */

import { executeAfterDelay, shiftDom } from 'dom-shift';
import { print, type, unType } from 'dom-cat';
import { init1 as initLogs1, init2 as initLogs2, mateInstall } from './logs';

import '../styles/styles.less';

shiftDom(
    [
        {
            name: 'init',
            step: () => {
                return new Promise(
                    resolve => {
                        print(
                            document.querySelector('.terminal'),
                            initLogs1,
                            400
                        );

                        executeAfterDelay(
                            () => {
                                print(
                                    document.querySelector('.terminal'),
                                    initLogs2,
                                    20
                                );
                            },
                            2000
                        );

                        executeAfterDelay(resolve, 2000);
                    }
                );
            }
        },
        {
            name: 'start-logs',
            step: () => {},
            duration: 500
        },
        {
            name: 'spawn-terminal',
            step: () => {
                print(
                    document.querySelector('.frame'),
                    mateInstall,
                    30
                );
            },
            duration: 4000
        },
        {
            name: 'flip',
            step: () => {},
            duration: 1500
        },
        {
            name: 'type-name',
            step: () => {
                type(
                    document.querySelector('.logo .name'),
                    'myTerminal',
                    100
                );
            },
            duration: 1000
        },
        {
            name: 'change-colors',
            step: () => {},
            duration: 3000
        },
        {
            name: 'revert-colors',
            step: () => {},
            duration: 500
        },
        {
            name: 'untype-name',
            step: () => {
                unType(
                    document.querySelector('.logo .name'),
                    100
                );
            },
            duration: 1500
        },
        {
            name: 'say-thanks',
            step: () => {
                type(
                    document.querySelector('.logo .name'),
                    'Thanks for watching!',
                    100
                );
            },
            duration: 2000
        },
        {
            name: 'end',
            step: () => {}
        },
    ]
);
