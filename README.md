# React Scroll Hook

[![npm (scoped)](https://img.shields.io/npm/v/@aaronhayes/react-scroll-hook?style=flat-square)](https://www.npmjs.com/package/@aaronhayes/react-scroll-hook)
[![Bundle Size](https://img.shields.io/bundlephobia/min/@aaronhayes/react-scroll-hook?style=flat-square)](https://bundlephobia.com/result?p=@aaronhayes/react-scroll-hook@1.0.0)
![License](https://img.shields.io/npm/l/@aaronhayes/react-scroll-hook?style=flat-square)

Hook for watching vertical scrolling location when using [React Scroll](https://github.com/fisshy/react-scroll)

## Install

```
$ npm install --save @aaronhayes/react-scroll-hook
```

```
$ yarn add @aaronhayes/react-scroll-hook
```

## Usage

```TypeScript
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import useScrollSpy from '@aaronhayes/react-scroll-hook';

const MyScrollWatchingComponent = () => {
    const location = useScrollSpy();
    console.log(location);
    // Location will either be undefined or the current element scrolled to.

    return (
        <div>
            <h1>
                You are currently scrolled to: {location}
            </h1>
        </div>
    )
}

```

## See Also

- [React Scroll](https://github.com/fisshy/react-scroll)
