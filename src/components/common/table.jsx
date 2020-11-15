import React from "react";

const Table = ({ visit }) => {
  console.log(visit);
  return (
    <tr>
      <th>{visit.dog_name}</th>
      <td>{visit.start_at}</td>
      <td>{visit.end_at}</td>
      <td>{visit.guest_id}</td>
    </tr>
  );
};
export default Table;
