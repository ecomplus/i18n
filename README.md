# i18n

[![Publish](https://github.com/ecomplus/i18n/workflows/Publish/badge.svg)](https://github.com/ecomplus/i18n/actions?workflow=Publish) [![npm version](https://img.shields.io/npm/v/@ecomplus/i18n.svg)](https://www.npmjs.org/@ecomplus/i18n) [![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

:brazil: :us:

Tree shakable dictionary focused on eCommerce JS applications.

> `i18n` ~ `i19` ~ Internationalization

## Getting started

```bash
npm i --save @ecomplus/i18n
```

### Usage

```js
import { i19hello, i19visitor } from '@ecomplus/i18n'
console.log(`${i19hello.en_us} ${i19visitor.pt_br}`)
// Hello Visitor
console.log(`${i19hello.pt_br} ${i19visitor.pt_br}`)
// Olá Visitante
```

We recommend using it with [`ecomUtils.i18n`](https://developers.e-com.plus/utils/ecomUtils.html#.i18n):

```js
import { i18n } from '@ecomplus/utils'
import { i19hello, i19visitor } from '@ecomplus/i18n'
console.log(`${i18n(i19hello)} ${i18n(i19visitor)}`)
// Hello Visitor
```

Change current language with `ecomUtils._config`:

```js
import { _config, i18n } from '@ecomplus/utils'
import { i19hello, i19visitor } from '@ecomplus/i18n'
_config.set('lang', 'pt_br')
console.log(`${i18n(i19hello)} ${i18n(i19visitor)}`)
// Olá Visitante
```

#### Import entire dictionary object

It'll output large size bundle, _not good for frontend apps_.

```js
import dictionary from '@ecomplus/i18n'
console.log(`${dictionary.i19hello.en_us} ${dictionary.i19visitor.en_us}`)
// Hello Visitor
```

### Webpack alias

You can import only one language variation using [Webpack `resolve.alias`](https://webpack.js.org/configuration/resolve/#resolvealias) as following:

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
import { i19hello, i19visitor } from '@ecomplus/i18n'
console.log(`${i19hello} ${i19visitor}`)
// Hello Visitor
```

You can still use [`ecomUtils.i18n`](https://developers.e-com.plus/ecomplus-utils/ecomUtils.html#.i18n) the same way:

```js
import { i18n } from '@ecomplus/utils'
import { i19hello, i19visitor } from '@ecomplus/i18n'
console.log(`${i18n(i19hello)} ${i18n(i19visitor)}`)
// Hello Visitor
```

## Conventions

1. String values always with **uppercased first letter** (eg.: `'Hello'`);
2. Variable (`const`) names always in English;
3. **Prefix `i19`** for all variable names;
4. String variables must be _camelCased_ (eg.: `i19helloWorld`);
5. Object (enums) variables must be _PascalCased_ (eg.: `i19OrderStatus`);
6. **All language options must have same variables**;
7. For long messages: variable name should be suffixed with `Msg`;
8. For questions: variable name should be suffixed with `Qn`;

### Code style

9. Exported constants must be alphabetically ordered;
10. Additional line break before objects (not for strings);
