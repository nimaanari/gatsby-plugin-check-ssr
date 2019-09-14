import React from 'react';
import CheckSSR from './index';

export const wrapRootElement = ({ element }) => <CheckSSR.Provider value={false}>{element}</CheckSSR.Provider>;