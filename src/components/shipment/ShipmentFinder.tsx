import {FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

export default function ShipmentFinder() {
  const navigate = useNavigate();
  const [trackingNumber, setTrackingNumber] = useState('');

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (trackingNumber) navigate('/tracking-shipment/' + trackingNumber);
  }

  return (
    <Container>
      <h2 style={{color: 'red'}}>تتبع شحنتك</h2>
      <p style={{fontFamily: 'Arial', fontWeight: 'bold', color: 'dimgray'}}>
        اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة
      </p>
      <form onSubmit={handleFormSubmit}>
        <Input
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="رقم الشحنة"
        />{' '}
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </form>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fafafa;
  padding: 1em;
  width: max-content;
`;

const Input = styled.input`
  border: 1px solid #eaeaea;
  border-radius: 4px;
  font-size: inherit;
  padding: 0.5em;
`;

const SearchButton = styled.button`
  border-radius: 50%;
  width: 2em;
  height: 2em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
`;

function SearchIcon() {
  return (
    <svg viewBox="0 0 512 512" width="12" height="12">
      <path
        fill="currentColor"
        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
      />
    </svg>
  );
}
