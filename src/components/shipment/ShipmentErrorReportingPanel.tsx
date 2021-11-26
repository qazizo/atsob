import styled from 'styled-components';
import problemReportingImage from '../../images/problem-reporting.png';

export default function ShipmentErrorReportingPanel() {
  return (
    <Container>
      <img src={problemReportingImage} alt="" />
      <div style={{fontSize: '0.875em'}}>
        <p>هل يوجد مشكلة في شحنتك؟!</p>
        <Button>إبلاغ عن مشكلة</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1em;
  padding: 1em;
  border-radius: 5px;
  display: flex;
  gap: 1em;
  align-items: center;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.25em;
  border: none;
  background-color: red;
  color: white;
  font: inherit;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
  :active {
    filter: brightness(0.8);
  }
`;
