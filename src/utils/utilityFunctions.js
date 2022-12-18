export const readableTimestamp = (javaTimestamp) => {
  const timestamp = new Date(javaTimestamp)
  const pad = (n, s = 2) => `${new Array(s).fill(0)}${n}`.slice(-s)

  return `${pad(timestamp.getDate())}-${pad(timestamp.getMonth() + 1)}-${pad(
    timestamp.getFullYear(),
    4,
  )}`
}

export const readableTimestampWithTime = (javaTimestamp) => {
  const timestamp = new Date(javaTimestamp)
  const pad = (n, s = 2) => `${new Array(s).fill(0)}${n}`.slice(-s)

  return `${pad(timestamp.getFullYear(), 4)}-${pad(timestamp.getMonth() + 1)}-${pad(
    timestamp.getDate(),
  )} ${pad(timestamp.getHours())}:${pad(timestamp.getMinutes())}:${pad(timestamp.getSeconds())}`
}

export const valueToType = (value) => {
  if (value === 'MEAL') {
    return 'Yemek'
  } else if (value === 'TRAVEL') {
    return 'Yolculuk'
  } else if (value === 'TRANSPORTATION') {
    return 'Ulaşım'
  } else if (value === 'CLOTHING') {
    return 'Giyim'
  } else if (value === 'ACCOMMODATION') {
    return 'Konaklama'
  } else {
    return 'Diğer'
  }
}

export const typeToValue = (type) => {
  if (type === 'Yemek') {
    return 'MEAL'
  } else if (type === 'Yolculuk') {
    return 'TRAVEL'
  } else if (type === 'Ulaşım') {
    return 'TRANSPORTATION'
  } else if (type === 'Giyim') {
    return 'CLOTHING'
  } else if (type === 'Konaklama') {
    return 'ACCOMMODATION'
  } else {
    return 'OTHERS'
  }
}

// ANNUAL, MATERNITY, MARRIAGE, PATERNITY
export const valueToTypeLeave = (value) => {
  if (value === 'ANNUAL') {
    return 'Yıllık İzin'
  } else if (value === 'MATERNITY') {
    return 'Doğum İzni'
  } else if (value === 'MARRIAGE') {
    return 'Evlilik İzni'
  } else if (value === 'PATERNITY') {
    return 'Babalık İzni'
  }
}

export const typeToValueLeave = (type) => {
  if (type === 'Yıllık İzin') {
    return 'ANNUAL'
  } else if (type === 'Doğum İzni') {
    return 'MATERNITY'
  } else if (type === 'Evlilik İzni') {
    return 'MARRIAGE'
  } else if (type === 'Babalık İzni') {
    return 'PATERNITY'
  }
}

export const phoneNumberFormatView = (phoneNumberString) => {
  let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  let match1 = cleaned.match(/^(90|)?(\d{4})(\d{3})(\d{2})(\d{2})$/)
  let match2 = cleaned.match(/^(90|)?(\d{3})(\d{3})(\d{2})(\d{2})$/)
  if (match1) {
    let intlCode = match1[1] ? '+90 ' : ''
    return [intlCode, match1[2], ' ', match1[3], ' ', match1[4], ' ', match1[5]].join('')
  } else if (match2) {
    let intlCode = match2[1] ? '+90 0' : ''
    return [intlCode, match2[2], ' ', match2[3], ' ', match2[4], ' ', match2[5]].join('')
  }
  return null
}
