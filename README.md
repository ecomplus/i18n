# [WIP] i18n

Tree shakable dictionary for e-commerce JS apps

## Getting started

```bash
npm i --save @ecomplus/i18n
```

```js
import { hello, visitor } from '@ecomplus/i18n'
console.log(`${hello.pt_br} ${visitor.pt_br}`)
```

We recommend using it with
[`ecomUtils.i18n`](https://developers.e-com.plus/ecomplus-utils/ecomUtils.html#.i18n):

```js
import { i18n } from '@ecomplus/utils'
import { hello, visitor } from '@ecomplus/i18n'
console.log(`${i18n(hello)} ${i18n(visitor)}`)
```

### Webpack alias

You can import only one language variation using
[Webpack `resolve.alias`](https://webpack.js.org/configuration/resolve/#resolvealias)
as following:

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    alias: {
      '@ecomplus/i18n$': `@ecomplus/i18n/src/${lang}/`
    }
  }
}
```

**By this way you'll import only strings instead of objects**:

```js
import { hello, visitor } from '@ecomplus/i18n'
console.log(`${hello} ${visitor}`)
```

You can still use
[`ecomUtils.i18n`](https://developers.e-com.plus/ecomplus-utils/ecomUtils.html#.i18n)
the same way:

```js
import { i18n } from '@ecomplus/utils'
import { hello, visitor } from '@ecomplus/i18n'
console.log(`${i18n(hello)} ${i18n(visitor)}`)
```
