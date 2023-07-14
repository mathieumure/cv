import TravelIcon from '~/app/icons/TravelIcon.vue';
import MusicIcon from '~/app/icons/MusicIcon.vue';
import GamingIcon from '~/app/icons/GamingIcon.vue';

export const data = {
  name: 'Mathieu Mure',
  title: 'CTO / Frontend Architect',
  description:
    '<b>CTO</b> depuis 3+ ans au sein de Zenika Lyon, regroupant 50+ consultants.<br />Consultant frontend depuis 9+ ans, évoluant dans des applications grand public comme backoffice. Speaker dans des conférences comme Devoxx France ou DevFest Nantes Co-Organisateur du LyonJS. Formateur React, Vue, Node & JS.',
  email: 'mathieu.mure@gmail.com',
  phone: '(+33)6 88 50 19 06',
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
    { label: 'Cinéma & Séries', icon: null },
  ],
  personalDetails: ['Permis B'],
};
