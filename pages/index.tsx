import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu/HeaderMegaMenu';
import { EmojiWithElement } from '../components/EmojiWithElement/EmojiWithElement';

import mockData from '../mocks/links.json';
import { Space } from '@mantine/core';
import { MyTechServices } from '../components/MyTechServices/MyTechServices';
import { TechnicalSkills } from '../components/TechnicalSkills/TechnicalSkills';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { ContactMe } from '../components/ContactMe/ContactMe';

const mockdata = [
  {
    image: '/images/auditors.gif',
    title: 'Pharmacists',
    description: 'Azurill can be seen bouncing and playing on its big, rubbery tail',
  },
  {
    image: '/images/lawyers.gif',
    title: 'Lawyers',
    description: 'Fans obsess over the particular length and angle of its arms',
  },
  {
    image: '/images/dance.gif',
    title: 'Bank owners',
    description: 'They divvy up their prey evenly among the members of their pack',
  },
  {
    image: '/images/others.gif',
    title: 'Others',
    description: 'Phanpy uses its long nose to shower itself',
  },
];

const testimonialsData = [
 
    {
      title: 'Page views',
      stats: '456,133',
      description: '24% more than in the same month last year, 33% more that two years ago',
    },
    {
      title: 'New users',
      stats: '2,175',
      description: '13% less compared to last month, new user engagement up by 6%',
    },
    {
      title: 'Completed orders',
      stats: '1,994',
      description: '1994 orders were completed this month, 97% satisfaction rate',
    },
  
  ];

export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <Welcome />
      <Space h="xl" pb={10} />
      <EmojiWithElement />
      <MyTechServices supTitle={undefined} description={undefined} data={mockdata} />
      <TechnicalSkills />
      <Testimonials/>
      <Space h="xl" pb={400} />
      <ContactMe />
    </>
  );
}
