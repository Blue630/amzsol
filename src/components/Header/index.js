import {Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';
import {ReactComponent as UserSVG} from './../../user.svg';
import './index.css';

function Header(props) {
  return (
    <>
      {[false].map((expand, index) => (
        <Navbar key={index} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><img className='logo-img' src={process.env.PUBLIC_URL + '/logo.png'}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {
              props.showOthers && 
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="campaign.html">Dashboard</Nav.Link>
                    <Nav.Link href="rules.html">File Settings</Nav.Link>
                  </Nav>
                  <Nav>
                    <UserSVG />
                    <NavDropdown title="uchiyama@j-wire.info-San" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/subscriptions/new">Plan Management</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/payments">Payment Methods</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/users/sign_out">Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
            }
            </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;