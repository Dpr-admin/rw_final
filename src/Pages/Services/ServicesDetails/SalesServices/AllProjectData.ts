// src/Pages/Projects/projectsData.ts

import { Services } from "../../../../assets";

export interface ProjectData {
  title: string;
  image: string;
  sqft: string;
  isReverse?: boolean;
  link?: string;
  location?: string;
  bhk?: string;
  rera?: string;
  units?: string;
  highlights?: string[];
  status?: string;
}

export const projectsData: ProjectData[] = [
  {
    title: 'Megaleio ',
    image: "https://dprstorage.b-cdn.net/RW/Megaleio.png",
    sqft: '8,888 - 11,111 sqft',
    location: 'TGSPA Junction',
    bhk: '4 & 5 BHK',
    rera: 'P02400007676',
    units: '150 Units',
    highlights: [
      'Twin high-rise towers',
      'Premium luxury specifications',
      'Smart automation features',
      'Contemporary architecture',
    ],
    status: 'Under construction',


  },
  {
    title: '  Skyline',
    image: "https://dprstorage.b-cdn.net/RW/candeur.png",
    sqft: '6,520 – 11,999 sq.ft',
    isReverse: true,
    bhk: '4 BHK ',
    location: 'Financial District',
    rera: ' P02400005670',
    units: '230 units',
    highlights: [
      'One of The Tallest residential tower in South India ',
      '13 ft ceiling height',
      'Private lift lobby for each apartment',
      'Ultra-premium clubhouse with curated luxury amenities',
    ],
    status: 'Under construction',

  },
  {
    title: ' Vamsiram Newmark',
    image: "https://dprstorage.b-cdn.net/RW/vamsiram.png",
    location: 'Narsingi',
    sqft: '4,595 – 6,500 sq.ft',
    bhk: '4 BHK',
    rera: 'P02400007343',
    units: '272 units ',
    highlights: [
      'Two luxury towers with 272 residences',
      '50,000+ sq.ft. clubhouse with rooftop lounge',
      'Infinity pool, pet zone, gallery, art spaces',
      '80% open space with greenery',
    ],
    status: ': Under construction ',

  },
  {
    title: '  Iris',
    image: "https://dprstorage.b-cdn.net/RW/raghava.png",
    sqft: '5,430 – 6,605 sq.ft.',
    location: ' Gachibowli',
    bhk: '4 & 6 BHK',
    rera: 'P02400006708',
    units: ' 528 units',
    highlights: [
      '3 iconic towers with 45 floors each',
      'Sky Island” at the top (inspired by Marina Bay, Singapore)',
      'Private elevators for each unit',
      '52,000 sq.ft. clubhouse with theater, spa, infinity pool',
    ],
    status: 'Under construction',

  },
  {
    title: ' Songs of the Sun ',
    image: "https://dprstorage.b-cdn.net/RW/songs.png",
    sqft: '2825.00 - 3295.00 sq.ft',
    location: ' Financial District',
    bhk: ' 3 & 4 BHK',
    rera: 'P01100007254',
    units: ' 593 Units',
    highlights: [
      'Four 37-floor towers with 592 residences',
      'Corner units for natural light and privacy',
      'G+4 clubhouse with indoor courts, co-working space, meditation zones',
      'Luxury finishes and smart design',
    ],
    status: 'Under construction',

  },
  {
    title: ' The Marquise ',
    image: "https://dprstorage.b-cdn.net/RW/projects/marquise.jpg",
    sqft: '5185.00 - 9765.00 sq.ft',
    location: ' Kokapet',
    bhk: ' 4 & 5 BHK',
    rera: 'P02400006708',
    units: '  295 Units',
    highlights: [
      'Luxury Living by the Lake @ Kokapet',
      'Exclusive Living: Only 2-4 Flats Per floor, Private lifts for each flat, 6 Levels of Parking',
      'Best-in-class amenities spread across 5 floors for leisure, entertainment',
      'Covered landscape spread across 87000 Sft. (Approx. 2 Acres) with recreation spaces',
    ],
    status: '',

  },
  {
    title: ' Sage  ',
    image: "https://dprstorage.b-cdn.net/RW/projects/sage.png",
    sqft: '3015.00 - 3600.00 sq.ft',
    location: ' Kollur',
    bhk: ' 4 BHK Villas',
    rera: 'P01100008686',
    units: ' 169 Units',
    highlights: [

    ],
    status: '',

  },
  {
    title: 'The Trilight ',
    image: "https://dprstorage.b-cdn.net/RW/projects/trilight.png",
    sqft: '2888.00 - 11333.00 sq.ft',
    location: ' Kokapet',
    bhk: ' 3/4 & 5 BHK',
    rera: 'P02400005390',
    units: ' 462 Units',
    highlights: [
      '3 different Club Houses',
      '78% Open Space',
      'Best in class Architect and consultants',
      'No flats, Balcony facing each other, Complete Privacy',
    ],
    status: '',

  },
  {
    title: ' Skymarq ',
    image: "https://dprstorage.b-cdn.net/RW/projects/skymarq.png",
    sqft: '3999.00 - 5454.00 sq.ft',
    location: ' Puppalaguda',
    bhk: '3 & 4 BHK',
    rera: '',
    units: '664 Units',
    highlights: [

    ],
    status: '',

  },
  {
    title: 'The Promenade ',
    image: "https://dprstorage.b-cdn.net/RW/projects/promenade.png",
    sqft: '3852.00 - 4168.00 sq.ft',
    location: ' Kollur',
    bhk: '4 BHK',
    rera: 'P01100003619',
    units: '121 Units',
    highlights: [
      "Bask in the grandeur of double-height living spaces, thoughtfully designed to exude openness and luxury",
      "Relax and entertain on spacious terraces and elegant balconies, perfect for soaking in serene views",
      "Enjoy cutting-edge design, premium amenities, and meticulous attention"
    ],
    status: '',

  },
  {
    title: 'Keerthi Richmond Villas ',
    image: "https://dprstorage.b-cdn.net/RW/projects/keerthi.png",
    sqft: '3400.00 - 5400.00sq.ft',
    location: ' Bandlaguda',
    bhk: '4,4.5 BHK',
    rera: 'P02400000701',
    units: ' 296 Units',
    highlights: [

    ],
    status: '',

  },
  {
    title: 'CINQ ',
    image: "https://dprstorage.b-cdn.net/RW/projects/cinq.png",
    sqft: '3575.00- 3644.00 sq.ft',
    location: ' Nanakramguda',
    bhk: '4, BHK',
    rera: 'P02400009341',
    units: ' 1132 Units',
    highlights: [

    ],
    status: '',

  },
  {
    title: 'Villa Verde ',
    image: "https://dprstorage.b-cdn.net/RW/projects/verde1.png",
    sqft: '5369.00-  20464.00sq.ft',
    location: ' HITECH City',
    bhk: '4/5/7 BHK Villas',
    rera: 'P02200009074',
    units: '89 Units',
    highlights: [

    ],
    status: '',

  },

  {
    title: 'ONE OAK ',
    image: "https://dprstorage.b-cdn.net/RW/projects/oneoak.png",
    sqft: '6,000.00-  7,800  .00sq.ft',
    location: ' Manchirevula ',
    bhk: '3/4 BHK Villas',
    rera: '',
    units: '',
    highlights: [

    ],
    status: '',

  },
  {
    title: 'The Twins ',
    image: "https://dprstorage.b-cdn.net/RW/projects/twins.jpg",
    sqft: '15999.00-  15999 .00sq.ft',
    location: ' Nanakramguda',
    bhk: '',
    rera: 'P02400005887',
    units: '85 Units',
    highlights: [

    ],
    status: '',

  },
  {
    title: 'One Oak ',
    image: "https://dprstorage.b-cdn.net/RW/projects/oneoak.png",
    sqft: '4240.00 - 7800.00 sq.ft',
    location: ' Manchirevula',
    bhk: '3 / 4 BHK Villas',
    rera: 'P02400004291',
    units: '22 Units',
    highlights: [

    ],
    status: '',

  },
  {
    title: 'MSN ONE ',
    image: "https://dprstorage.b-cdn.net/RW/projects/msnone.png",
    sqft: '5250.00 - 7460.00 sq.ft',
    location: ' Kokapet',
    bhk: '4 BHK Uber Luxury',
    rera: '',
    units: '655 Units',
    highlights: [

    ],
    status: '',

  },

  {
    title: 'Haven RiverSide',
    image: "https://dprstorage.b-cdn.net/RW/projects/haven.png",
    sqft: '1269 - 4598 sq.ft',
    location: ' TSPA Junction',
    bhk: '4 BHK Uber Luxury',
    rera: 'P02400004765',
    units: '410 units',
    highlights: [

    ],
    status: '',

  },
  {
    title: ' bridge Epsilon',
    image: "https://dprstorage.b-cdn.net/RW/projects/bridge.png",
    sqft: '6105 - 6175 sq.ft',
    location: ' Tukkuguda',
    bhk: '4 BHK Villa',
    rera: 'P02400009348',
    units: '128 Unitss',
    highlights: [

    ],
    status: '',

  },
  {
    title: ' SREENIDHI',
    image: "https://dprstorage.b-cdn.net/RW/projects/sreenidhi.png",
    sqft: '4000.00 - 11,363.00 sq.ft',
    location: ' Jubilee Hills',
    bhk: 'Commercial Spaces',
    rera: 'A02500003489',
    units: '',
    highlights: [
      "Iconic address at Jubilee Hills’ hilltop",
      "High-street frontage on Road No. 78",
      "Grade-A workspaces with efficient floorplates",
      "Exclusive entry for office zone with valet provision"
    ],
    status: '',

  },

  {
    title: ' Northstar Allura',
    image: "https://dprstorage.b-cdn.net/RW/projects/northstar.png",
    sqft: '4019.00- 4910.00 sq.ft',
    location: ' Kokapet,',
    bhk: '4 BHK Luxury Villa ',
    rera: 'P02400006130',
    units: '54 Units',
    highlights: [
      "Innovative Concept - Each Villa with two road access",
      "Surrounded by major MNCs and IT Companies",
      "Imported Italian marble & bath fixtures",
      "Fully-loaded clubhouse with an indoor badminton court, gym, party hall & swimming pool"

    ],
    status: '',

  },
  {
    title: ' Nestmarkers',
    image: "https://dprstorage.b-cdn.net/RW/projects/newmark.png",
    sqft: '3140.00 - 10000.00 sq.ft',
    location: ' Tukkuguda',
    bhk: '4 BHK Luxury Villas',
    rera: '',
    units: '220 Units',
    highlights: [
      "Villas that are truly customizable, a first in Hyderabad",
      "The property boasts a 450-acre oxygen factory, creating its own microclimate",
      "Amenities include organic farming, pet grooming facilities, a barbecue area, a theme park, and a mini theatre"

    ],
    status: '',

  },
    {
    title: ' ankura homes',
    image: "https://dprstorage.b-cdn.net/RW/projects/konak.png",
    sqft: '.00 - .00 sq.ft',
    location: ' ',
    bhk: '',
    rera: 'P01100008925',
    units: '104 Villas',
    highlights: [
  
    ],
    status: '',

  },
      {
    title: 'SYLVANOR BY BLUEFIN',
    image: "https://dprstorage.b-cdn.net/RW/projects/SYLVANOR.png",
    sqft: '.00 - .00 sq.ft',
    location: 'Mokila  ',
    bhk: '',
    rera: '',
    units: '147 Villas',
    highlights: [
  
    ],
    status: '',

  },
  {
    title: 'Som Boulevard ',
    image: "https://dprstorage.b-cdn.net/RW/projects/SomBoulevard.png",
    sqft: '2,700.00 - 4,275.00 sq.ft',
    location: ' Mokila ',
    bhk: '4BHK Dulpex luxury Villas',
    rera: 'P02400003701',
    units: '270 Villas',
    highlights: [
  
    ],
    status: '',

  },
  {
    title: 'cascades ',
    image: "https://dprstorage.b-cdn.net/RW/projects/cascades.png",
    sqft: '2560.00 - 4825 .00 sq.ft',
    location: 'Kokapet   ',
    bhk: '3 / 4 BHK Villas',
    rera: 'P02400009538',
    units: '1199 Units',
    highlights: [
  
    ],
    status: '',

  },
];
