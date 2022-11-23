import {Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';
import {ReactComponent as UserSVG} from './../../user.svg';
import {Link} from 'react-router-dom'
import './index.css';

function Header(props) {
  return (
    <>
      {[false].map((expand, index) => (
        <Navbar key={index} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>
                <Link to="/">
                  <img className='logo-img' src={process.env.PUBLIC_URL + '/logo.png'}/>
                </Link>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link><Link to="/companysettings">CompanySettings</Link></Nav.Link>
                    <Nav.Link><Link to="/startpage">StartPage</Link></Nav.Link>
                    <Nav.Link><Link to="/transactionwithtabs">Transactionwithtabs</Link></Nav.Link>
                    {props.showOthers && <>
                        <Nav.Link href="campaign.html">Dashboard</Nav.Link>
                        <Nav.Link href="rules.html">File Settings</Nav.Link>
                      </>
                    }
                  </Nav>            
                {
                  props.showOthers && 
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
                }
              </Navbar.Collapse>
            </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;