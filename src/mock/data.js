import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'sho kato portfolio', // e.g: 'Name | Developer'
  lang: 'ja', // e.g: en, es, fr, jp
  description: 'sho kato portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Sho Kato Portfolio',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Sho Kato',
  paragraphTwo: 'N高等学校2年生',
  paragraphThree: '使用できるプログラミング言語 フレームワーク',
  paragraphFour: 'html css nuxt.js react(勉強中)',
  paragraphFive: '趣味',
  paragraphSix: '寝ること',
  paragraphSeven: '2020 09  〜 株式会社CYMES インターン',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'オセロ',
    info: 'オフラインで初めてオセロを作成しました。',
    info2: 'siv3d',
    url: 'https://github.com/shou-kato/siv3d_osero',
  },
  {
    id: nanoid(),
    img: 'project.png',
    title: 'オンラインオセロ',
    info: 'オンラインで対戦できるオセロを作りました。',
    info2: 'nuxt.js socket io',
    url: 'https://github.com/shou-kato/socketIo_reverse',
  },
  {
    id: nanoid(),
    img: 'project.png',
    title: '掲示板',
    info: '昔から掲示板を作りたい思い作ってみました。',
    info2: 'nuxt.js firebase(auth store)',
    url: '',
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/hoge_sc',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shou-kato',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
