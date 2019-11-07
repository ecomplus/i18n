# i18n

[![npm version](https://img.shields.io/npm/v/@ecomplus/storefront-template.svg)](https://www.npmjs.org/@ecomplus/i18n)
[![license mit](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Tree shakable dictionary for e-commerce JS apps

## Getting started

```bash
npm i --save @ecomplus/i18n
```

### Usage

```js
import { Hello, Visitor } from '@ecomplus/i18n'
console.log(`${Hello.en_us} ${Visitor.pt_br}`)
// Hello Visitor
console.log(`${Hello.pt_br} ${Visitor.pt_br}`)
// Olá Visitante
```

We recommend using it with
[`ecomUtils.i18n`](https://developers.e-com.plus/ecomplus-utils/ecomUtils.html#.i18n):

```js
import { i18n } from '@ecomplus/utils'
import { Hello, Visitor } from '@ecomplus/i18n'
console.log(`${i18n(Hello)} ${i18n(Visitor)}`)
// Hello Visitor
```

Change current language with `ecomUtils._config`:

```js
import { _config, i18n } from '@ecomplus/utils'
import { Hello, Visitor } from '@ecomplus/i18n'
_config.set('lang', 'pt_br')
console.log(`${i18n(Hello)} ${i18n(Visitor)}`)
// Olá Visitante
```

#### Import entire dictionary object

It'll output large size bundle, _not good for frontend apps_.

```js
import dictionary from '@ecomplus/i18n'
console.log(`${dictionary.Hello.en_us} ${dictionary.Visitor.en_us}`)
// Hello Visitor
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
      '@ecomplus/i18n$': `@ecomplus/i18n/dist/i18n.${lang}.min.js`
    }
  }
}
```

**By this way you'll import only strings instead of objects**:

```js
import { Hello, Visitor } from '@ecomplus/i18n'
console.log(`${Hello} ${Visitor}`)
// Hello Visitor
```

You can still use
[`ecomUtils.i18n`](https://developers.e-com.plus/ecomplus-utils/ecomUtils.html#.i18n)
the same way:

```js
import { i18n } from '@ecomplus/utils'
import { Hello, Visitor } from '@ecomplus/i18n'
console.log(`${i18n(Hello)} ${i18n(Visitor)}`)
// Hello Visitor
```
