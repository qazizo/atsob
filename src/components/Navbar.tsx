import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {BostaLogo, ArrowDownIcon, MenuIcon} from './Icons';
import ShipmentFinder from './shipment/ShipmentFinder';

export default function Navbar() {
  const [shipmentFinderVisible, setShipmentFinderVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Nav>
      <Link to="/" style={{display: 'inline-flex'}}>
        <BostaLogo />
      </Link>

      <PlainButton onClick={() => setMenuVisible(!menuVisible)}>
        <MenuIcon />
      </PlainButton>

      <Links visible={menuVisible}>
        <NavLink to="/">الرئيسية</NavLink>
        <NavLink to="">الأسعار</NavLink>
        <NavLink to="">كلم المبيعات</NavLink>
        <div style={{position: 'relative'}}>
          <PlainButton
            onClick={() => setShipmentFinderVisible(!shipmentFinderVisible)}>
            تتبع شحنتك&nbsp;&nbsp;
            <ArrowDownIcon color="red" />
          </PlainButton>
          {shipmentFinderVisible && (
            <div style={{position: 'absolute'}}>
              <ShipmentFinder />
            </div>
          )}
        </div>
        <Link to="">تسجيل الدخول</Link>
        <Link to="" style={{color: 'red'}}>
          ENG
        </Link>
      </Links>
    </Nav>
  );
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  padding: 0 4em;
  display: flex;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #eee;
  z-index: 10;

  > button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding-top: 1em;
    padding-bottom: 1em;
    justify-content: space-between;

    > button {
      display: unset;
    }
  }
`;

const Links = styled.div<{visible: boolean}>`
  margin-right: 1em;
  display: flex;
  align-items: center;
  gap: 1em;
  font-weight: bold;
  color: #444;

  a {
    padding: 0.5em 0.5em 1em;
    border-top: 4px solid transparent;
    display: inline-flex;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    :hover {
      border-top-color: red;
    }
  }

  @media screen and (max-width: 768px) {
    display: ${({visible}) => !visible && 'none'};
    flex-direction: column;
    width: 80%;
    position: absolute;
    top: 3.5em;
    background-color: white;
    border: 1px solid #eee;
    a {
      border: none;
      padding: 0.25em 2em;
    }
  }
`;

const PlainButton = styled.button`
  background: none;
  border: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`;
