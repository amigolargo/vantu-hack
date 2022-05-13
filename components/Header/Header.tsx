import React from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, Image, Box } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  logo: {
    width: 200,
    margin: '0 0 0 20px'
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

interface HeaderMiddleProps {
  
}

export function HeaderMiddle({}: HeaderMiddleProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();

  return (
    <Box>
    <Header height={56} mb={120} sx={{background: '#2a2b34', border: 'none'}}>
        <Container className={classes.inner}>
            <Burger
              opened={opened}
              onClick={() => toggleOpened()}
              size="sm"
              className={classes.burger}
            />

            <Group spacing={0} className={classes.logo} position="center" noWrap>
                <Image src="/vantu.png" width="120px" />
            </Group>

            <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
                <BrandTwitter size={18} />
            </ActionIcon>
            <ActionIcon size="lg">
                <BrandInstagram size={18} />
            </ActionIcon>
            </Group>
        </Container>
    </Header>
    </Box>
  );
}