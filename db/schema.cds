namespace sap.cap.productshop;
aspect  corbonemmision{
     emmision : Integer;
     rating  : Integer
}


type pricecost {
  Price : Integer;
  stock : Integer;
}

entity Product :  corbonemmision{
  key id       : Integer;
      name     : String;
      category : String;
      cost     : pricecost;


}

entity Supplier {
  key ID    : String(100);
      name  : String(100);
      city  : String(100);
      phone : String(100);
}
