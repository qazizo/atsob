import {StrictMode} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import ShipmentDetails from './shipment/ShipmentDetails';

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/tracking-shipment/:trackingNumber"
            element={<ShipmentDetails />}
          />
          <Route
            path="*"
            element={<h1 style={{textAlign: 'center'}}>404</h1>}
          />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
