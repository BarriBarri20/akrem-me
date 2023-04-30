import {
  AspectRatio,
  Avatar,
  Button,
  Center,
  Grid,
  Group,
  MantineProvider,
  Stack,
  Text,
  UnstyledButton,
  createStyles,
  keyframes,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons';

// Export animation to reuse it in other components
export const bounce = keyframes({
  'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
  '40%, 43%': { transform: 'translate3d(0, -1.875rem, 0)' },
  '70%': { transform: 'translate3d(0, -0.9375rem, 0)' },
  '90%': { transform: 'translate3d(0, -0.25rem, 0)' },
});

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing.xl,
    animation: `${bounce} 3s ease-in-out infinite`,
  },
}));

export function EmojiWithElement() {
  const { classes } = useStyles();

  return (
    <Group position="center" align="center">
      <Stack align="center">
        <Button
          target="_blank"
          href="https://twitter.com/mantinedev"
          variant="gradient"
          gradient={{ from: 'orange', to: 'red' }}
          styles={(theme) => ({
            root: {
              backgroundColor: '#00acee',
              width: rem(200),
              height: rem(70),
              paddingLeft: rem(30),
              paddingRight: rem(20),
              borderRadius: rem(0),
              fontSize: rem(20),
              // animation={`${bounce} 1s infinite`}
            },

            leftIcon: {
              marginRight: theme.spacing.md,
            },
          })}
        >
          Know more!
        </Button>
        <Text size={45} className={classes.container}>
          👇
        </Text>
      </Stack>
    </Group>
  );
}
