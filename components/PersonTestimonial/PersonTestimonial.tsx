// Testimonials
import { createStyles, SegmentedControl, rem, Container } from '@mantine/core';
import { SetStateAction, useState } from 'react';
import { CardFeedBack } from '../CardFeedback/CardFeedBack';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  indicator: {
    backgroundImage: theme.fn.gradient({ from: 'pink', to: 'orange' }),
  },

  control: {
    border: '0 !important',
  },

  label: {
    '&, &:hover': {
      '&[data-active]': {
        color: theme.white,
      },
    },
  },
}));

interface PersonTestimonialProps {
  technology: string;
}

export function PersonTestimonial({ technology }: PersonTestimonialProps) {
  const { classes } = useStyles();

  const [selectedItem, setSelectedItem] = useState('All');

  const handleSelectedItemChange = (item: SetStateAction<string>) => {
    setSelectedItem(item);
  };

  return (
    <>
      <CardFeedBack
        title={technology}
        description={'Second Description'}
        image={''}
        action={{
          label: 'test',
          link: 'test',
        }}
      />
    </>
  );
}
