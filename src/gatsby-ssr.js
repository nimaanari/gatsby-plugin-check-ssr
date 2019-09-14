import CheckSSR from 'index'

export const wrapRootElement = ({ element }) => <CheckSSR.Provider value={true}>{element}</CheckSSR.Provider>;