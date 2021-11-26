import styled from 'styled-components';
import Shipment from '../../interfaces/Shipment';
import TRANSIT_STATES from '../../locales/ar/transit-states';

type ShipmentOverviewProps = {
  shipment: Shipment;
  statusColor: string;
};

export default function ShipmentOverview({
  shipment,
  statusColor,
}: ShipmentOverviewProps) {
  const state =
    TRANSIT_STATES[shipment.CurrentStatus.state as keyof typeof TRANSIT_STATES];

  return (
    <Container>
      <div>
        <Label>رقم الشحنة {shipment.TrackingNumber}</Label>
        <Value style={{color: statusColor}}>{state}</Value>
      </div>

      <div>
        <Label>آخر تحديث</Label>
        <Value>
          {new Date(shipment.CurrentStatus.timestamp).toLocaleString('ar', {
            weekday: 'long',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          })}
        </Value>
      </div>

      <div>
        <Label>اسم التاجر</Label>
        <Value>-</Value>
      </div>

      <div>
        <Label>موعد التسليم خلال</Label>
        <Value>
          {shipment.PromisedDate
            ? new Date(shipment.PromisedDate).toLocaleDateString('ar', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
            : '-'}
        </Value>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  gap: 1em;
  border-bottom: 1px solid #eee;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.div`
  color: gray;
`;

const Value = styled.div`
  font-weight: bold;
  color: #222;
`;
