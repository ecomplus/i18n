// named exports by lang
import * as enUs from './en_us/'
import * as ptBr from './pt_br/'
export { enUs, ptBr }

// default export dictionary object
// all words and langs
const dictionary = {}
for (const str in enUs) {
  if (enUs[str]) {
    dictionary[str] = {
      en_us: enUs[str]
    }
    if (ptBr[str]) {
      dictionary[str].pt_br = ptBr[str]
    }
  }
}
export default dictionary

// named exports of each word with multiple langs
// __all.js file is AUTO GENERATED with `npm run generate` or `npm run build`
export * from './../__all'
