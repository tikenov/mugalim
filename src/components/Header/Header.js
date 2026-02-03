import React from 'react'
import { Group, Burger, Drawer, ScrollArea, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../images/logo.svg';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Басқы бет', url: '/' },
  { label: 'Жоба туралы', url: '/about' },
  { label: 'Қатысушыларға', url: '/participants' },
  { label: 'Бірлестіктер', url: '/associations' },
  { label: 'Жобаға тіркелу', url: '/register' },
  { label: 'Жобаны қолдау', url: '/support' },
  { label: 'Байланыс', url: '/contacts' },
  { label: 'ЖҚС / FAQ', url: '/faq' }
];

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { pathname } = useLocation();

  return (
    <header className="header" role="banner">
      <Group justify="space-between" h="100%" wrap="nowrap">
        <Link to="/" className="logo-link" aria-label="Басты бетке өту">
          <img src={logo} alt="Мұғалім Өскемен логотипі" width={200} height="auto" />
        </Link>
        <nav className="nav-desktop" aria-label="Негізгі навигация">
          <Group h="100%" gap={4} visibleFrom="md">
            {navItems.map(({ label, url }) => (
              <Link
                key={url}
                to={url}
                className={`nav-link ${pathname === url ? 'active' : ''}`}
                onClick={closeDrawer}
              >
                {label}
              </Link>
            ))}
          </Group>
        </nav>
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom="md"
          aria-label="Мәзірді ашу"
          size="sm"
        />
      </Group>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="62%"
        padding="md"
        hiddenFrom="md"
        withCloseButton={false}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(100)})`} mx="-md" className="drawer-scroll">
          <nav className="drawer-nav" aria-label="Мобильді навигация">
            {navItems.map(({ label, url }) => (
              <Link
                key={url}
                to={url}
                className={`nav-link nav-link-mobile ${pathname === url ? 'active' : ''}`}
                onClick={closeDrawer}
              >
                {label}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </Drawer>
    </header>
  )
}

export default Header;
