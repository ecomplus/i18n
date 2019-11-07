'use strict'

const fs = require('fs')
const path = require('path')

const langsByWords = {}
let newJsContent = ''

;['en_us', 'pt_br'].forEach(lang => {
  const jsContent = fs.readFileSync(path.join(__dirname, `../src/${lang}/index.js`), 'utf8')
  if (jsContent) {
    ;[...jsContent.matchAll(/export const ([^\s]+) =/g)]
      .forEach(([_, word]) => {
        if (!langsByWords[word]) {
          langsByWords[word] = []
        }
        langsByWords[word].push(lang)
        newJsContent += `
import { ${word} as ${lang}${word} } from './src/${lang}/'
`
      })
  }
})

for (const word in langsByWords) {
  const langs = langsByWords[word]
  if (Array.isArray(langs)) {
    newJsContent += `
export const ${word} = { ${langs.map(lang => `${lang}: ${lang}${word}`).join(', ')} }
`
  }
}

fs.writeFileSync(path.join(__dirname, '../__all.js'), newJsContent)
