namespace sap.cap.productshop;

entity Product
{
    key id : Integer;
    name : String;
    stock : Integer;
    Price : Integer;
    category : String(100);
}

entity Supplier
{
    key ID : String(100);
    name : String(100);
    city : String(100);
    phone : String(100);
}
