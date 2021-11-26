export default interface Shipment {
  CurrentStatus: ShipmentStatus;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: ShipmentTransitEvent[];
  CreateDate: string;
  PromisedDate?: string;
}

export interface ShipmentStatus {
  state: string;
  timestamp: string;
}

export interface ShipmentTransitEvent extends ShipmentStatus {
  hub?: string;
  reason?: string;
}
