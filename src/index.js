import codeListDE from './de/map'
import codeListEN from './en/map'
import codeListES from './es/map'
import codeListFR from './fr/map'
import codeListJA from './ja/map'
import codeListPTBR from './ptbr/map'
import codeListRU from './ru/map'
import codeListZHCN from './zhcn/map'
import codeListZHTW from './zhtw/map'
import namesDE from './de/list'
import namesEN from './en/list'
import namesES from './es/list'
import namesFR from './fr/list'
import namesJA from './ja/list'
import namesPTBR from './ptbr/list'
import namesRU from './ru/list'
import namesZHCN from './zhcn/list'
import namesZHTW from './zhtw/list'

function getNameList (locale = 'EN') {
  const loc = locale.toUpperCase()
  switch (loc) {
    case 'DE':
      return namesDE
    case 'EN':
      return namesEN
    case 'ES':
      return namesES
    case 'FR':
      return namesFR
    case 'JA':
      return namesJA
    case 'PTBR':
      return namesPTBR
    case 'RU':
      return namesRU
    case 'ZHCN':
      return namesZHCN
    case 'ZHTW':
      return namesZHTW
  }
}

function getName (code, locale = 'EN') {
  const loc = locale.toUpperCase()
  const c = code.toUpperCase()
  switch (loc) {
    case 'DE':
      return codeListDE[c]
    case 'EN':
      return codeListEN[c]
    case 'ES':
      return codeListES[c]
    case 'FR':
      return codeListFR[c]
    case 'JA':
      return codeListJA[c]
    case 'PTBR':
      return codeListPTBR[c]
    case 'RU':
      return codeListRU[c]
    case 'ZHCN':
      return codeListZHCN[c]
    case 'ZHTW':
      return codeListZHTW[c]
  }
}

function getCodeList (locale = 'EN') {
  const loc = locale.toUpperCase()
  switch (loc) {
    case 'DE':
      return codeListDE
    case 'EN':
      return codeListEN
    case 'ES':
      return codeListES
    case 'FR':
      return codeListFR
    case 'JA':
      return codeListJA
    case 'PTBR':
      return codeListPTBR
    case 'RU':
      return codeListRU
    case 'ZHCN':
      return codeListZHCN
    case 'ZHTW':
      return codeListZHTW
  }
}

export {
  codeListDE,
  codeListEN,
  codeListES,
  codeListFR,
  codeListJA,
  codeListPTBR,
  codeListRU,
  codeListZHCN,
  codeListZHTW,
  getCodeList,
  getName,
  getNameList,
  namesDE,
  namesEN,
  namesES,
  namesFR,
  namesJA,
  namesPTBR,
  namesRU,
  namesZHCN,
  namesZHTW
}
