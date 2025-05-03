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
  developer?: string;
  highlights?: string[];
  status?: string;
}

export const projectsData: ProjectData[] = [
  {
    title: 'Megaleio ',
    image:"https://dprstorage.b-cdn.net/RW/Megaleio.png",
    sqft: '8,888 - 11,111 sqft',
    location: 'Financial District',
    bhk: '4 & 5 BHK',
    rera: 'P02400007676',
    developer: 'Navanaami Projects Pvt. Ltd',
    highlights: [
      'Twin high-rise towers',
      'Premium luxury specifications',
      'Smart automation features',
      'Contemporary architecture',
    ],
    status: 'Under construction',
    link: 'https://dprprop.com/projects/DPR042',
    
  },
  {
    title: '  Skyline',
    image: "https://dprstorage.b-cdn.net/RW/candeur.png",
    sqft: '6,520 – 11,999 sq.ft',
    isReverse: true,
    bhk: '4 BHK ',
    location: 'Financial District',
    rera: ' P02400005670',
    developer: 'Candeur Constructions',
    highlights: [
      'Tallest residential tower in South India (59+ floors)',
      '13 ft ceiling height',
      'Private lift lobby for each apartment',
      'Ultra-premium clubhouse with curated luxury amenities',
    ],
    status: 'Under construction',
    link: 'https://dprprop.com/projects/DPR022',
  },
  {
    title: ' Vamsiram Newmark',
    image: "https://dprstorage.b-cdn.net/RW/vamsiram.png",
    location: 'Narsingi',
    sqft: '4,595 – 6,500 sq.ft',
    bhk: '4 BHK',
    rera: 'P02400007343',
    developer: 'Newmark UrbanSpaces ',
    highlights: [
        'Two luxury towers with 272 residences',
        '50,000+ sq.ft. clubhouse with rooftop lounge',
        'Infinity pool, pet zone, gallery, art spaces',
        '80% open space with greenery',
    ],
    status: ': Under construction ',
    link: '/',
  },
  {
    title: '  Iris',
    image: "https://dprstorage.b-cdn.net/RW/raghava.png",
    sqft: '5,430 – 6,605 sq.ft.',
    location: ' Gachibowli',
    bhk: '4 & 6 BHK',
    rera: 'P02400006708',
    developer: ' Raghava Projects Pvt. Ltd.',
    highlights: [
        '3 iconic towers with 45 floors each',
        'Sky Island” at the top (inspired by Marina Bay, Singapore)',
        'Private elevators for each unit',
        '52,000 sq.ft. clubhouse with theater, spa, infinity pool',
    ],
    status: 'Under construction',
    link: '/',
  },
  {
    title: ' Songs of the Sun ',
    image:"https://dprstorage.b-cdn.net/RW/songs.png",
    sqft: '2825.00 - 3295.00 sq.ft',
    location: ' Financial District',
    bhk: ' 3 & 4 BHK',
    rera: 'P01100007254',
    developer: ' Myscape Properties Pvt. Ltd',
    highlights: [
        'Four 37-floor towers with 592 residences',
        'Corner units for natural light and privacy',
        'G+4 clubhouse with indoor courts, co-working space, meditation zones',
        'Luxury finishes and smart design',
    ],
    status: 'Under construction',
    link: '/',
  },
 
];
