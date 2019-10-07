import codeToPhone from './map-code-phone'
import getCodeListDE from './de/map-code-name'
import getCodeListEN from './en/map-code-name'
import getCodeListES from './es/map-code-name'
import getCodeListFR from './fr/map-code-name'
import getCodeListJA from './ja/map-code-name'
import getCodeListPTBR from './ptbr/map-code-name'
import getCodeListRU from './ru/map-code-name'
import getCodeListZHCN from './zhcn/map-code-name'
import getCodeListZHTW from './zhtw/map-code-name'
import getCodes from './codes'
import getNameListDE from './de/map-name-code'
import getNameListEN from './en/map-name-code'
import getNameListES from './es/map-name-code'
import getNameListFR from './fr/map-name-code'
import getNameListJA from './ja/map-name-code'
import getNameListPTBR from './ptbr/map-name-code'
import getNameListRU from './ru/map-name-code'
import getNameListZHCN from './zhcn/map-name-code'
import getNameListZHTW from './zhtw/map-name-code'
import getNamesDE from './de/names'
import getNamesEN from './en/names'
import getNamesES from './es/names'
import getNamesFR from './fr/names'
import getNamesJA from './ja/names'
import getNamesPTBR from './ptbr/names'
import getNamesRU from './ru/names'
import getNamesZHCN from './zhcn/names'
import getNamesZHTW from './zhtw/names'

// getName returns the name for that country from the 2-digits country code.
function getName (code, locale = 'EN') {
  const loc = locale.toUpperCase()
  const c = code.toUpperCase()
  switch (loc) {
    case 'DE':
      return getCodeListDE()[c]
    case 'EN':
      return getCodeListEN()[c]
    case 'ES':
      return getCodeListES()[c]
    case 'FR':
      return getCodeListFR()[c]
    case 'JA':
      return getCodeListJA()[c]
    case 'PTBR':
      return getCodeListPTBR()[c]
    case 'RU':
      return getCodeListRU()[c]
    case 'ZHCN':
      return getCodeListZHCN()[c]
    case 'ZHTW':
      return getCodeListZHTW()[c]
  }
}

// getCode returns the code for that country given the country name.
function getCode (name, locale = 'EN') {
  const loc = locale.toUpperCase()
  const n = name
  switch (loc) {
    case 'DE':
      return getNameListDE()[n]
    case 'EN':
      return getNameListEN()[n]
    case 'ES':
      return getNameListES()[n]
    case 'FR':
      return getNameListFR()[n]
    case 'JA':
      return getNameListJA()[n]
    case 'PTBR':
      return getNameListPTBR()[n]
    case 'RU':
      return getNameListRU()[n]
    case 'ZHCN':
      return getNameListZHCN()[n]
    case 'ZHTW':
      return getNameListZHTW()[n]
  }
}

// getPhoneCode returns the phone code from a country code.
function getPhoneCode (countryCode) {
  return codeToPhone()[countryCode.toUpperCase()]
}

// getNames returns an array of all country names.
function getNames (locale = 'EN') {
  const loc = locale.toUpperCase()
  switch (loc) {
    case 'DE':
      return getNamesDE()
    case 'EN':
      return getNamesEN()
    case 'ES':
      return getNamesES()
    case 'FR':
      return getNamesFR()
    case 'JA':
      return getNamesJA()
    case 'PTBR':
      return getNamesPTBR()
    case 'RU':
      return getNamesRU()
    case 'ZHCN':
      return getNamesZHCN()
    case 'ZHTW':
      return getNamesZHTW()
  }
}

// getNameList returns a key-value object of all countries using the name as key.
function getNameList (locale = 'EN') {
  const loc = locale.toUpperCase()
  switch (loc) {
    case 'DE':
      return getNameListDE()
    case 'EN':
      return getNameListEN()
    case 'ES':
      return getNameListES()
    case 'FR':
      return getNameListFR()
    case 'JA':
      return getNameListJA()
    case 'PTBR':
      return getNameListPTBR()
    case 'RU':
      return getNameListRU()
    case 'ZHCN':
      return getNameListZHCN()
    case 'ZHTW':
      return getNameListZHTW()
  }
}

// getCodeList returns a key-value object of all countries using the code as key.
function getCodeList (locale = 'EN') {
  const loc = locale.toUpperCase()
  switch (loc) {
    case 'DE':
      return getCodeListDE()
    case 'EN':
      return getCodeListEN()
    case 'ES':
      return getCodeListES()
    case 'FR':
      return getCodeListFR()
    case 'JA':
      return getCodeListJA()
    case 'PTBR':
      return getCodeListPTBR()
    case 'RU':
      return getCodeListRU()
    case 'ZHCN':
      return getCodeListZHCN()
    case 'ZHTW':
      return getCodeListZHTW()
  }
}

export {
  getCodeList,
  getCodeListDE,
  getCodeListEN,
  getCodeListES,
  getCodeListFR,
  getCodeListJA,
  getCodeListPTBR,
  getCodeListRU,
  getCodeListZHCN,
  getCodeListZHTW,
  getCode,
  getCodes,
  getName,
  getNameList,
  getNameListDE,
  getNameListEN,
  getNameListES,
  getNameListFR,
  getNameListJA,
  getNameListPTBR,
  getNameListRU,
  getNameListZHCN,
  getNameListZHTW,
  getNames,
  getNamesDE,
  getNamesEN,
  getNamesES,
  getNamesFR,
  getNamesJA,
  getNamesPTBR,
  getNamesRU,
  getNamesZHCN,
  getNamesZHTW,
  getPhoneCode
}
