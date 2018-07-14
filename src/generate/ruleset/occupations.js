const occupations = {
  govwork: {
    includes: ['14', '41', '15', '51', '19', '91'],
    desc: 'กลุ่มงานราชการ',
    occupation: true,
  },
  salesmen: {
    includes: [
      '22',
      '24',
      '42',
      '26',
      '62',
      '44',
      '46',
      '64',
      '56',
      '65',
      '66',
    ],
    desc: 'เซลล์แมน พนักงานขาย',
    occupation: true,
  },
  clothesSeller: {
    includes: ['24', '42', '22', '23', '32', '29', '92', '66', '69', '96'],
    desc:
      'ค้าของสวยงาม เสื้อผ้า เครื่องประดับ เครื่องสำอาง ร้านเสริมสวย เสริมความงาม',
    occupation: true,
  },
  onlineEntrepreneur: {
    includes: [
      '15',
      '51',
      '16',
      '61',
      '22',
      '23',
      '32',
      '24',
      '42',
      '26',
      '62',
      '29',
      '92',
      '36',
      '63',
      '46',
      '64',
      '65',
      '56',
      '66',
    ],
    desc: 'เจ้าของกิจการ เจ้าของร้านค้า ร้านค้า online',
    occupation: true,
  },
  publicRelations: {
    includes: [
      '14',
      '41',
      '22',
      '23',
      '32',
      '24',
      '42',
      '44',
      '46',
      '64',
      '15',
      '51',
      '19',
      '91',
    ],
    desc: 'ประชาสัมพันธ์ PR. พนักงานต้อนรับ',
    occupation: true,
  },
  speaker: {
    includes: [
      '14',
      '41',
      '19',
      '91',
      '24',
      '42',
      '26',
      '62',
      '46',
      '64',
      '47',
      '74',
    ],
    desc: 'นักพูด พิธีกร ล็อบบี้ยิสต์ กลุ่มที่ใช้คำพูดหาเงิน หารายได้',
    occupation: true,
  },
  monk: {
    includes: ['59', '95', '05', '50', '45', '54', '55', '99'],
    desc: 'นักบวช ผู้ทรงศีล',
    occupation: true,
  },
  teacher: {
    includes: ['14', '41', '15', '51', '45', '54', '55', '59', '95'],
    desc: 'ครู อาจารย์ งานสอนพิเศษ',
    occupation: true,
  },
  scientist: {
    includes: [
      '14',
      '41',
      '15',
      '51',
      '45',
      '54',
      '49',
      '94',
      '59',
      '95',
      '99',
    ],
    desc: 'นักวิทยาศาสตร์ นักวิชาการ',
    occupation: true,
  },
  thinker: {
    includes: [
      '14',
      '41',
      '15',
      '51',
      '16',
      '61',
      '56',
      '65',
      '35',
      '53',
      '36',
      '63',
      '39',
      '93',
    ],
    desc: 'เจ้าของธุรกิจ งานปกครอง นักบริหาร นักวางแผน นักคิด นักบัญชี',
    occupation: true,
  },
  occultist: {
    includes: ['09', '90', '05', '50', '99'],
    desc: 'นักไสยศาสตร์ หมอดู ร่างทรง',
    occupation: true,
  },
  scammer: {
    includes: [
      '19',
      '91',
      '49',
      '94',
      '59',
      '95',
      '99',
      '24',
      '42',
      '23',
      '32',
      '45',
      ' 54',
    ],
    desc: 'ธุรกิจแปลกใหม่ เช่น MLM, E-Marketing',
    occupation: true,
  },
  insuranceSales: {
    includes: ['14', '41', '24', '42', '23', '32', '45', '54'],
    desc: 'พนักงานขายประกัน',
    occupation: true,
  },
  electronics: {
    includes: ['19', '91', '49', '94', '95', '59', '99'],
    desc: 'งานเกี่ยวกับเครื่องใช้ไฟฟ้า คอมพิวเตอร์ มือถือ',
    occupation: true,
  },
  internet: {
    includes: ['49', '94', '59', '95'],
    desc: 'อินเตอร์เน็ต โปรแกรมเมอร์',
    occupation: true,
  },
  oldSeller: {
    includes: ['09', '90', '79', '97', '89', '98'],
    desc: 'ค้าของเก่า ของขลัง พระเครื่อง ของมงคล',
    occupation: true,
  },
  designer: {
    includes: ['29', '92', '36', '63', '66', '69', '96'],
    desc: 'ออกแบบ ตกแต่ง ช่างฝีมือ interior งานฝีมือ งานประดิษฐ์ ของสวยงาม ',
    occupation: true,
  },
  politician: {
    includes: ['78', '87', '89', '98'],
    desc: 'นักการเมือง นักการเมืองท้องถิ่น งานต้องใช้อิทธิพล',
    occupation: true,
  },
  rescuer: {
    includes: ['47', '74', '77', '89', '98'],
    desc: 'หน่วยกู้ภัย นักสังคมสงเคราะห์',
    occupation: true,
  },
  industrial: {
    includes: ['17', '71', '74', '47'],
    desc: 'อุตสาหกรรม โรงงาน',
    occupation: true,
  },
  propertySeller: {
    includes: [
      '47',
      '74',
      '78',
      '87',
      '79',
      '97',
      '28',
      '82',
      '(ให้ผสมกับเลขค้าขาย)',
    ],
    desc: 'อสังหาริมทรัพย์ นายหน้าค้าที่ดิน',
    occupation: true,
  },
  broker: {
    includes: ['78', '87', '93', '39', '28', '82', '789', '879'],
    desc: 'นักเล่นหุ้น',
    occupation: true,
  },
  soldier: {
    includes: ['13', '31', '15', '51', '19', '91', '34', '43', '35', '53'],
    desc: 'ทหาร ตำรวจ',
    occupation: true,
  },
  sportsmen: {
    includes: ['33', '39', '93', 'และควรมีเลข', '5', 'กำกับไว้ในเบอร์ด้วย'],
    desc: 'นักกีฬา นักแข่ง',
    occupation: true,
  },
  leader: {
    includes: ['35', '53', '47', '74', '89', '98'],
    desc: 'งานนักปกครอง ผู้จัดการ หัวหน้างาน',
    occupation: true,
  },
  engineer: {
    includes: ['35', '53', '04', '40', '33'],
    shouldHave: 5,
    desc: 'วิศวะกร งานช่างต่าง ๆ งานซ่อมแซม',
    occupation: true,
  },
  gangster: {
    includes: ['28', '82', '78', '87', '88', '89', '98'],
    desc: 'นักเลง เจ้าพ่อ เจ้าของสถานเริงรมย์ ธุรกิจสายเทา ธุรกิจกลางคืน',
    occupation: true,
  },
  actor: {
    includes: ['24', '42', '29', '92', '66', '69', '96', '19', '91'],
    desc: 'นักแสดง ดารา',
    occupation: true,
  },
  magician: {
    includes: [
      '49',
      '94',
      '58',
      '85',
      '(หัวไว',
      'รู้พลิกแพลง',
      'แก้ไขปัญหาเฉพาะหน้าเก่ง)',
    ],
    desc: 'นักมายากล',
    occupation: true,
  },
  student: {
    includes: ['14', ' 41', ' 15', ' 51', ' 45', ' 54'],
    desc: 'นักเรียน นักศึกษา',
    occupation: true,
  },
}

export default occupations