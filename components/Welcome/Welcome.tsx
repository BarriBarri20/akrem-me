import { Title, Text, Anchor } from '@mantine/core';

import { RoughNotation } from 'react-rough-notation';

import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 65,
    fontWeight: 0,
    letterSpacing: 0,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
  text: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: 30,
    lineHeight: 1.5,
    // maxWidth: 1,
  },
}));

export function Welcome() {
  const { classes, theme } = useStyles();

  return (
    <>
      <Title order={1} align="center" className={classes.title}>
        Hi there,{' '}
        <Text inherit variant="gradient" component="span">
          I am Akrem
        </Text>
      </Title>
      <Text
        color="dimmed"
        align="center"
        size="lg"
        sx={{ maxWidth: 700 }}
        mx="auto"
        mt="xl"
        className={classes.text}
      >
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://linkedin.com/in/akram-ben-ghanem" size={30}>
          let's get in touch on{' '}
          <RoughNotation type="underline" show={true} color="#ff007f">
            {' '}
            LinkedIn
          </RoughNotation>
        </Anchor>
        <RoughNotation type="underline" color="#ff9800">
          . To get started edit index.tsx file.
        </RoughNotation>
      </Text>
    </>
  );
}
