import TravelIcon from '~/app/icons/TravelIcon.vue';
import MusicIcon from '~/app/icons/MusicIcon.vue';
import GamingIcon from '~/app/icons/GamingIcon.vue';
import MovieIcon from '~/app/icons/MovieIcon.vue';
import ZenikaIcon from '~/app/icons/ZenikaIcon.vue';
import WorldlineIcon from '~/app/icons/WorldlineIcon.vue';

export const data = {
  name: 'Mathieu Mure',
  title: 'CTO / Frontend Architect',
  description:
    '<b>CTO</b> depuis 3+ ans au sein de Zenika Lyon, regroupant 50+ consultants.<br />Consultant <b>frontend</b> depuis 9+ ans, évoluant dans des applications grand public comme backoffice.<br/><b>Speaker</b> dans des conférences comme Devoxx France ou DevFest Nantes. <br /><b>Président</b> du LyonJS.<br/><b>Formateur</b> React, Vue, Node & JS.',
  email: 'mathieu.mure@gmail.com',
  phone: '(+33)6 88 50 19 06',
  website: 'https://cv.mathieumure.fr',
  location: 'Lyon, France',
  socials: {
    twitter: '@mathieumure',
    linkedin: '/in/mathieumure',
    github: '@mathieumure',
  },
  langages: {
    fr: 'Langue Maternelle',
    en: 'Professionnel & technique',
  },
  interests: [
    { label: 'Voyage', icon: TravelIcon },
    { label: 'Music', icon: MusicIcon },
    { label: 'Jeux Vidéo', icon: GamingIcon },
    { label: 'Cinéma & Séries', icon: MovieIcon },
  ],
  experiences: [
    {
      name: 'CTO',
      icon: ZenikaIcon,
      items: [
        {
          title: 'Consulting, Training & Mentoring',
          main: 'Bedrock, Enedis, PeopleSphere, Semarchy, ...',
          location: 'Lyon, France',
          dates: 'Nov - Avr 2022',
          icon: '~/companies/sodiaal.png',
        },
        {
          title: 'Architecte Vue',
          main: 'Sodiaal',
          location: 'Lyon, France',
          dates: 'Nov 2021 - Avr 2022',
          icon: '/companies/sodiaal.png',
        },
        {
          title: 'Architecte React',
          main: 'Clubic',
          location: 'Lyon, France',
          dates: 'Nov 2020 - Nov 2021',
          icon: '/companies/sodiaal.png',
        },
        {
          title: 'Tech Lead React',
          main: 'Bedrock',
          location: 'Lyon, France',
          dates: 'Déc 2018 - Nov 2020',
          icon: '/companies/sodiaal.png',
        },
        {
          title: 'Lead Dev Vue & Java Spring',
          main: 'JOA',
          location: 'Lyon, France',
          dates: 'Oct 2018 - Nov 2018',
          icon: '/companies/sodiaal.png',
        },
        {
          title: 'Lead dev Vue',
          main: 'Ocea Smart Building',
          location: 'Lyon, France',
          dates: 'Mai 2017 - Oct 2018',
          icon: '/companies/sodiaal.png',
        },
      ],
    },
    {
      name: 'Ingénieur Etude et développement',
      icon: WorldlineIcon,
      items: [
        {
          title: 'Dev Angular.JS',
          main: 'Oney',
          location: 'Lyon, France',
          dates: 'Jan 2016 - Avr 2017',
          icon: '/companies/sodiaal.png',
        },
        {
          title: 'Dev Angular.JS / Spring',
          main: 'Arval',
          location: 'Lyon, France',
          dates: 'Nov 2015 - Dec 2015',
          icon: '/companies/sodiaal.png',
        },
        {
          title: 'Dev Angular.JS / Spring',
          main: 'AG2R',
          location: 'Lyon, France',
          dates: 'Oct 2014 - Oct 2015',
          icon: '/companies/sodiaal.png',
        },
        {
          title: 'Dev Spring',
          main: 'Cetelem',
          location: 'Lyon, France',
          dates: 'Mar 2013 - Sep 2014',
          icon: '/companies/sodiaal.png',
        },
      ],
    },
  ],
  skills: [
    { name: 'Soft skills', icon: MovieIcon, items: ['Management', 'Steering'] },
    { name: 'Soft skills', icon: MovieIcon, items: [] },
    {
      name: 'Development',
      icon: MovieIcon,
      items: ['React JS', 'Vue JS', 'Typescript', 'Javascript', 'HTML', 'CSS', 'Vite', 'Jest'],
    },
  ],
  speaker: [
    {
      logo: MovieIcon,
      title: 'Mission Playwright: the Cypress killer by Microsoft',
      conferences: ['DevFest Nantes 2023', 'Volcamp 2022'],
    },
    { logo: MovieIcon, title: 'Comment économiser 80% de temps de CI avec PNPM', conferences: ['Sunnytech 2023'] },
    {
      logo: MovieIcon,
      title: 'Le GitOps dont vous êtes le héro',
      conferences: ['Mixit 2023', 'Devoxx France 2023', 'Devoxx Maroc 2022'],
    },
    {
      logo: MovieIcon,
      title: 'Vite the webpack killer',
      conferences: ['DevFest Nantes 2021', 'JUG Summer Camp 2021', 'Lyon JS'],
    },
    { logo: MovieIcon, title: 'Comment se faire traquer sur TOR sans s’en rendre compte', conferences: [''] },
  ],
};
