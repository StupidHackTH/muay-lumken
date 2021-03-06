import occupations from './occupations'

const summation = {
  14: 'ผู้ยิ่งใหญ่',
  15: 'ความสุนทรี',
  19: 'ผู้เสวยสุข',
  23: 'ยอดเสน่ห์',
  24: 'สมบูรณ์สุข',
  32: 'เสน่ห์แรง',
  36: 'สื่อแห่งความรัก',
  40: 'ชอบเดินทาง',
  41: 'ความผูกพันกับต่างประเทศ',
  42: 'ดวงอุปถัมภ์',
  44: 'ฝีปากดี',
  45: 'เทพีแห่งโชค',
  46: 'การแสวงหา',
  50: 'ความกระตือรือร้น',
  51: 'ความสุขที่ได้มา',
  54: 'ดวงดาวแห่งโชค',
  55: 'เจริญก้าวหน้าและสุขสบาย',
  56: 'มีโชคเรื่องความรัก',
  59: 'ยอดแห่งรหัสชีวิต',
  60: 'มีโชคเรื่องการเงิน',
  63: 'ความรักและความสดชื่น',
  64: 'ชีวิตพบกับความสำเร็จ',
  65: 'คู่ทรัพย์คู่โชค',
}

const negatives = {
  danger: {
    includes: ['13', '31', '73', '37'],
    negative: true,
    desc: 'อันตราย',
  },
  argue: {
    includes: ['12', '21'],
    negative: true,
    desc: 'ทะเลาะกับคนรัก หรือคนใกล้ตัว',
  },
  bewareWords: {
    includes: ['34', '43'],
    negative: true,
    desc: `พูดตรงๆ พูดแรงๆ พูดไม่ค่อยคิดถึงใจคนฟัง ต้องระวังเรื่องคำพูดให้มาก`,
  },
  anger: {
    includes: ['03', '30'],
    negative: true,
    desc: 'ระวังเรื่องอารมณ์ร้อนให้มากๆ ขึ้นที่แรง',
  },
}

const ruleset = {
  summation,
  rules: {
    ...negatives,
    ...occupations,
    panya: {
      includes: ['56', '65', '45', '54', '15', '51', '59', '95'],
      desc: 'ปัญญาดี',
    },
    negative1: {
      includes: ['76', '67'],
      negative: true,
      desc:
        'ระวังเรื่อง รายจ่าย หนี้สินให้มากๆ ด้านความรัก และครอบครัวให้ระวังเรื่องการหย่าร้าง การเลิกรา หรือการทะเลาะกัน',
    },
    payLots: {
      includes: [72],
      negative: true,
      desc:
        'ส่งผลเสียด้านเงินรั่ว รายจ่ายเยอะครับ มีแต่จ่ายๆ บางที่ไม่ใช่เรื่องของเราเลย แต่ก็ต้องไปจ่าย มีเรื่องให้เสียเงินได้ตลอดเวลา',
    },
    stressed: {
      includes: [77],
      negative: true,
      desc: 'รูู้สึกเครียด เก็บกด',
    },
    secretLove: {
      includes: ['02', '20'],
      desc: 'มีความลับ รักลับๆ',
    },
    playboy: {
      includes: ['06', '60'],
      desc: 'มีเสน่ห์ รายจ่ายเยอะ',
    },
    zero: {
      includes: ['00'],
      count: '0',
      desc: 'ให้ระวังเรื่องสุขภาพ โรคภัย ให้มากๆ ครับ',
      metaAdditional: '0 ยิ่งเยอะ ยิ่งอันตราย',
    },
    moneyModifier: {
      includes: ['69', '96'],
      desc: `่ถ้าตำแหน่งมาอยู่ 2 ตัวท้ายสุด นี่จบเลยครับ เงินไหลออกตลอด เก็บเงิน เก็บทองไม่ค่อยอยู่หรอกครับ`,
    },
    charisma: {
      includes: ['23', '32', '63', '36'],
      desc: 'อยากเพิ่มพลังด้านเสน่ห์',
    },
    trade: {
      includes: ['42', '24', '46', '64'],
      desc: 'เน้นการติดต่อเจรจาค้าขาย',
    },
    hugeMoney: {
      includes: ['28', '82', '78', '87'],
      desc: 'ต้องการพลังเรื่องเงินก้อนโต',
    },
    health: {
      includes: ['95', '59', '45', '54'],
      desc: 'อยากเพิ่มพลังเรื่องสุขภาพ',
    },
    education: {
      includes: ['15', '51', '14', '41'],
      desc: 'เน้นเรื่องการเรียน',
    },
    communication: {
      includes: ['44', '42', '24', '46', '64'],
      desc: 'ต้องการเสริมพลังเรื่องการติดต่อเจรจา',
    },
    government: {
      includes: ['15', '51', '14', '41', '19', '91'],
      desc: 'ต้องการพลังเรื่องรับราชการ',
    },
    barami: {
      includes: ['35', '53'],
      desc: 'ต้องการพลังเรื่องบารมี คุมคน',
    },
    property: {
      includes: ['79', '97'],
      desc: 'ต้องการเสริมพลังเรื่องธุรกิจอสังหา',
    },
    calm: {
      includes: ['55'],
      desc: 'ต้องการพลังเรื่องจิตใจเย็น ใจเย็น',
    },
    competitive: {
      includes: ['93', '39'],
      desc: 'ต้องการพลังเรื่องการแข่ง ชัยชนะ',
    },
    savingMoney: {
      includes: ['16', '61'],
      desc: 'ต้องการเสริมพลังเรื่องเก็บเงินอยู่',
    },
    money: {
      includes: ['65', '56'],
      desc: 'ต้องการเสริมพลังเรื่องเงินทอง',
    },
    superMoney: {
      includes: ['45', '46', '65', '64', '56', '54'],
      desc: 'เลขมงคลที่ดีที่สุดด้านเงินทอง ความสุข ช่วยขายดี เงินทองไม่ขาดมือ',
    },
    luck: {
      includes: ['78', '87', '78'],
      desc: 'ต้องการด้านโชคลาภเบอร์',
    },
    mindfulness: {
      includes: [15, 51, 35, 53, 45, 54, 55, 56, 65, 59, 95],
      desc:
        'เลขชุดปิดท้ายคือตำแหน่งของจิตใจ ซึ่งควบคุมทั้งด้านการเงิน และ การงาน ความรัก ดังคำกล่าวว่า “ใจเป็นนาย กายเป็นบ่าว” ดังนั้นตำแหน่งนี้จึงควรเป็นตัวเลขกลุ่ม ปัญญา และ สติ เพื่อควบคุมพลังในเบอร์ทั้งหมด ให้เหมาะสม และสมดุลย์ กลุ่มเลขปัญญา',
    },
  },
}

export default ruleset
