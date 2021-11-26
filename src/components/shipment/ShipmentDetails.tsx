import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import Shipment from '../../interfaces/Shipment';
import ProgressIndicator from './ShipmentProgressIndicator';
import ShipmentOverview from './ShipmentOverview';
import ShipmentTransitEventsTable from './ShipmentTransitEventsTable';
import ShipmentErrorReportingPanel from './ShipmentErrorReportingPanel';

const API_URL = 'https://tracking.bosta.co/shipments/track/';

export default function ShipmentDetails() {
  const {trackingNumber} = useParams();
  const [shipment, setShipment] = useState<Shipment>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (trackingNumber) {
      setLoading(true);
      fetch(API_URL + trackingNumber)
        .then((response) => response.json())
        .then(setShipment)
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [trackingNumber]);

  return (
    <Container>
      {loading ? (
        <div style={{textAlign: 'center'}}>'جاري التحميل...'</div>
      ) : error ? (
        <div style={{textAlign: 'center', color: 'red'}}>
          خطأ: {error.message}
        </div>
      ) : (
        shipment && (
          <>
            <OverviewPanel>
              <ShipmentOverview
                shipment={shipment}
                statusColor={getStatusColor(shipment.CurrentStatus.state)}
              />
              <ProgressIndicator
                shipment={shipment}
                statusColor={getStatusColor(shipment.CurrentStatus.state)}
              />
            </OverviewPanel>

            <DetailsPanels>
              <div style={{flex: 1}}>
                <SectionHeading>تفاصيل الشحنة</SectionHeading>
                <ShipmentTransitEventsTable events={shipment.TransitEvents} />
              </div>

              <div>
                <div>
                  <SectionHeading>عنوان التسليم</SectionHeading>
                  <Address>-</Address>
                </div>

                <ShipmentErrorReportingPanel />
              </div>
            </DetailsPanels>
          </>
        )
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 2em 4em;
`;

const OverviewPanel = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
`;

const DetailsPanels = styled.div`
  display: flex;
  gap: 1em;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionHeading = styled.h2`
  font-size: 1.125em;
  font-weight: normal;
`;

const Address = styled.address`
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f8f8;
`;

function getStatusColor(state: string) {
  switch (state) {
    case 'DELIVERED':
      return 'green';
    case 'CANCELLED':
      return 'red';
    default:
      return 'orange';
  }
}
