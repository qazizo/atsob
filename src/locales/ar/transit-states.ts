const TRANSIT_STATES = {
  TICKET_CREATED: 'تم إنشاء الشحنة',
  PACKAGE_RECEIVED: 'تم استلام الشحنة',
  OUT_FOR_DELIVERY: 'الشحنة خرجت للتسليم',
  DELIVERED: 'تم التسليم',
  IN_TRANSIT: 'جاري النقل',
  NOT_YET_SHIPPED: 'لم يتم الشحن بعد',
  WAITING_FOR_CUSTOMER_ACTION: 'في انتظار تصرف العميل',
  RECEIVED_DELIVERY_LOCATION: 'تم تلقي مكان التسليم',
  DELIVERED_TO_SENDER: 'تم التسليم للمرسل',
};

export default TRANSIT_STATES;
