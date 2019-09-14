import React from 'react';

const CheckSSR = React.createContext(false);

export default CheckSSR;

export const InsideSSR = ({ children }) => <CheckSSR.Consumer>{build => (build && children)}</CheckSSR.Consumer>;
export const OutsideSSR = ({ children }) => <CheckSSR.Consumer>{build => (!build && children)}</CheckSSR.Consumer>;