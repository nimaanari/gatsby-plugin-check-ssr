# Gatsby-Plugin-Check-Ssr

Provides react components that render only inside/outside server-side-rendering.

## Installation

1. Add gatsby-plugin-check-ssr to your Gatsby project by executing `npm install --save gatsby-plugin-check-ssr`.
2. Modify your `gatsby-config.js` and add this plugin:
```js
// Inside gatsby-config.js
plugins: [
    `gatsby-plugin-check-ssr`
]
```

## Usage

You can wrap components in `<InsideSSR />` or `<OutsideSSR />`.
```js
// This file could be under src/pages/ for example.
import { InsideSSR, OutsideSSR } from 'gatsby-plugin-check-ssr';

export default () => (
    <div>
        <InsideSSR>We are inside SSR</InsideSSR>
        <OutsideSSR>We are in the browser</OutsideSSR>
    </div>
);
```

Alternatively you can use the default export which is a React context.

```js
// This file could be under src/pages/ for example.
import SSRContext from 'gatsby-plugin-check-ssr';

export default () => {
    const inSSR = useContext(SSRContext);
    if (inSSR){
        return <div>Inside SSR</div>;
    } else {
        return <div>Outside SSR</div>;
    }
};

## License

The MIT license.