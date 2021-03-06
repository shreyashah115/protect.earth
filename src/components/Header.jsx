import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const guides = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
  },
  {
    slug: 'carbon-offsetting',
    title: 'Is Carbon Offsetting Good or Bad?',
  },
];

const useCases = [
  {
    tag: 'commute',
    title: 'Commuter',
  },
  {
    tag: 'business',
    title: 'Business Owner',
  },
  {
    tag: 'home-owner',
    title: 'Home Owner',
  },
  {
    tag: 'land-owner',
    title: 'Land Owner',
  },
  {
    tag: 'nomad',
    title: 'Nomad',
  },
  {
    tag: 'developers',
    title: 'Programmer',
  },
];

const Header = ({ dark }) => (
  <header
    className={`header header-sticky ${
      dark ? 'header-minimal-dark' : 'header-minimal-light'
    }`}
  >
    <Container>
      <Row noGutters>
        <Col>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg={dark ? 'dark' : 'white'}
            variant={dark ? 'dark' : 'light'}
          >
            <Navbar.Brand href="/">Protect.Earth</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <DropdownButton title="I am a..." variant="Default">
                {useCases.map(useCase => (
                  <Dropdown.Item
                    key={`tag-${useCase.tag}`}
                    href={`/tags/${useCase.tag}`}
                  >
                    {useCase.title}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              <DropdownButton title="Guides" variant="Default">
                {guides.map(guide => (
                  <Dropdown.Item
                    key={`guide-${guide.slug}`}
                    href={`/${guide.slug}`}
                  >
                    {guide.title}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="https://github.com/protect-earth/protect.earth">
                Contribute
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
