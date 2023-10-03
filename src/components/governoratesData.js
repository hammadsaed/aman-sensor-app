const governoratesData = [
  {
    id: 1,
    name: 'Muscat',
    details: 'Capital governorate with beautiful beaches and historical sites.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234021.95947382707!2d58.2597034371441!3d23.583052517849076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffa8879aafc9%3A0xdb53876d0d79a72c!2sMuscat%2C%20Oman!5e0!3m2!1sen!2s!4v1696249042848!5m2!1sen!2s',
    accidents: [
      {
        person: 'Sultan Saif',
        car: 'Toyota Corolla',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.374822650395!2d58.3705934750074!3d23.590886794882046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff39b7087ff3%3A0xb5a15326312b4713!2sSultan%20Qaboos%20St%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1696298735725!5m2!1sen!2s',
      },
      {
        person: 'Rashid Faisal',
        car: 'Nissan Altima',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.058927588925!2d58.362593775006495!3d23.56632699581876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de7261e5f07dd%3A0x53f98bcbe34375e8!2sMuscat-Al%20Batina%20Expy%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1696298778429!5m2!1sen!2s',
      }
    ],
  },
  {
    id: 2,
    name: 'Dhofar',
    details: 'Southern governorate known for its monsoon season and lush greenery.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561621.1414027563!2d53.456411969442165!3d18.64329084201206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3c2c863f62d18815%3A0xc59356588151e639!2sDhofar%20Governorate%2C%20Oman!5e0!3m2!1sen!2s!4v1696248162840!5m2!1sen!2s'
  },
  {
    id: 3,
    name: 'Musandam',
    details: 'Northeastern governorate famous for its fjords and dramatic landscapes.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919486.6804032498!2d55.650410661681924!3d25.811990565394215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef688e6279369e3%3A0x45d1c458b5e4bc48!2sMusandam%20Governorate%2C%20Oman!5e0!3m2!1sen!2s!4v1696248214201!5m2!1sen!2s',
    accidents: [
      {
        person: 'Mohammed Ahmed',
        car: 'toyota Land Cruiser',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.9715258489578!2d56.23130057508506!3d26.16505679182124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef68e3c4bebf29f%3A0xd0ccccb5f8dc6ed5!2sSal%20ala%20Rd%2C%20Al%20Khasab%2C%20Oman!5e0!3m2!1sen!2s!4v1696298910923!5m2!1sen!2s',
      }
    ],
  },
  {
    id: 4,
    name: 'Al Batinah North',
    details: 'Northern governorate with agricultural and industrial significance.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931761.5487536889!2d56.16145931577026!3d24.182477948360486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8c2b3e6a218cf9%3A0x3b5b1fd9e91d42a2!2sAl%20Batinah%20North%20Governorate%2C%20Oman!5e0!3m2!1sen!2s!4v1696248255767!5m2!1sen!2s'
  },
  {
    id: 5,
    name: 'Al Batinah South',
    details: 'Southern part of Al Batinah known for its coastal beauty.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468354.8430585631!2d57.239207157246724!3d23.49570945059802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8c2beeb7d48043%3A0x7a6b820b6af24eca!2sAl%20Batinah%20South%20Governorate%2C%20Oman!5e0!3m2!1sen!2s!4v1696248300086!5m2!1sen!2s'
  },
  {
    id: 6,
    name: 'Al Buraimi',
    details: 'Governorate bordering the UAE, known for its forts and date palm groves.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58192.39776836157!2d55.7804621622873!3d24.27586219184623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab404a08eeddf%3A0xf5061d1ef264bfde!2sAl%20Buraimi%2C%20Oman!5e0!3m2!1sen!2s!4v1696248353819!5m2!1sen!2s'
  },
  {
    id: 7,
    name: 'Al Dhahirah',
    details: 'Governorate with historical sites and natural beauty.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885318.9166712672!2d54.84554167844931!3d22.643961839798536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e89a69697285697%3A0x59b128d13d989f5c!2sAd%20Dhahirah%20Governorate%2C%20Oman!5e0!3m2!1sen!2s!4v1696248389795!5m2!1sen!2s'
  },
  {
    id: 8,
    name: 'Al Dakhiliyah',
    details: 'Central governorate known for its mountains and cultural heritage.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890934.1011594937!2d56.139391071864885!3d22.231325279024517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8f65975e59368b%3A0x8afa281d3b4e749f!2sAd%20Dakhiliyah%20%E2%80%8DGovernorate%2C%20Oman!5e0!3m2!1sen!2s!4v1696248452061!5m2!1sen!2s'
  },
  {
    id: 9,
    name: 'Al Sharqiyah North',
    details: 'Northern part of Al Sharqiyah known for its desert landscapes.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1893468.2550197311!2d57.350414048874036!3d22.04270185026792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e9ca29cc8ffbed7%3A0x48949dcde1f306b9!2sAsh%20Sharqiyah%20North%20Governorate%2C%20Oman!5e0!3m2!1sen!2s!4v1696248475532!5m2!1sen!2s'
  },
  {
    id: 10,
    name: 'Al Sharqiyah South',
    details: 'Southern part of Al Sharqiyah with beautiful beaches and wadis.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1901937.3982390333!2d57.69556780955053!3d21.40086861267389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e9b0b7fa017b54f%3A0xb5c453db51631a26!2sAsh%20Sharqiyah%20South%20Governorate%2C%20Oman!5e0!3m2!1sen!2s!4v1696248664831!5m2!1sen!2s'
  },
  {
    id: 11,
    name: 'Al Wusta',
    details: 'Governorate in central Oman known for its deserts and wildlife.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923451.3009901377!2d55.34197300172183!3d19.68105973415969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e83463fbc738edd%3A0xdce4f17b047d2d6e!2sAl%20Wusta%20Governorate%2C%20Oman!5e0!3m2!1sen!2s!4v1696248698615!5m2!1sen!2s'
  },
];

export default governoratesData;
