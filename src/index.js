import * as enUs from './en_us/'
import * as ptBr from './pt_br/'

export { enUs, ptBr }

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
