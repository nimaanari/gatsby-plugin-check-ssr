import React from 'react';

export default CheckSSR = React.createContext(false);

export const InsideSSR = ({ children }) => <CheckSSR.Consumer>{build => (build && children)}</CheckSSR.Consumer>;
export const OutsideSSR = ({ children }) => <CheckSSR.Consumer>{build => (!build && children)}</CheckSSR.Consumer>;