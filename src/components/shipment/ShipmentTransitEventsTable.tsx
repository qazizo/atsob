import styled from 'styled-components';
import {ShipmentTransitEvent} from '../../interfaces/Shipment';
import TRANSIT_STATES from '../../locales/ar/transit-states';

type ShipmentTransitEventsTableProps = {events: ShipmentTransitEvent[]};

export default function ShipmentTransitEventsTable({
  events,
}: ShipmentTransitEventsTableProps) {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>الفرع</th>
            <th>التاريخ</th>
            <th>الوقت</th>
            <th>تفاصيل</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.timestamp}>
              <td>{event.hub}</td>
              <td>{new Date(event.timestamp).toLocaleDateString('en-UK')}</td>
              <td dir="ltr" align="right">
                {new Date(event.timestamp)
                  .toLocaleTimeString('en', {timeStyle: 'short'})
                  .toLowerCase()}
              </td>
              <td>
                <div>
                  {TRANSIT_STATES[event.state as keyof typeof TRANSIT_STATES]}
                </div>
                <span>{event.reason}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

const Container = styled.div`
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  min-width: 600px;
  border: 1px solid #ddd;
  border-radius: 5px;
  border-spacing: 0;

  thead tr {
    background-color: #f8f8f8;
    color: gray;
    text-align: right;
    font-weight: normal;
  }

  th,
  td {
    font-weight: normal;
    padding: 0.5em 1em;
    border-bottom: 1px solid #eee;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;
