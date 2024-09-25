"use client";

import { Button } from "@mui/material";

/* 
table => from witch table I do changes.
type => type of the request "CRUD"
data => data I want to modify
id => the id of the item I want to make CRUD on
*/
const FormModal = ({
  table,
  type,
  data,
  id,
  name,
}: {
  table:
    | "invoice"
    | "admin"
    | "manager"
    | "users"
    | "user_profile "
    | "announcement"
    | "event";
    type: 'create'| 'update' | 'delete' ;
    data?: any;
    id?: number;
    name:String
}) => {
  return (
    <Button className="">
      {name}
    </Button>
  );
};

export default FormModal;
