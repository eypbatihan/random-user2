import React, { useState } from "react";
import { Table, TableBody, Tablediv, TableTitle } from "./CardStyle";

const Tables = ({ addUser }) => {
  return (
    <Tablediv>
      {" "}
      {addUser.length > 0 ? (
        <Table>
          <TableTitle>
            <tr>
              <th>Firstname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
            </tr>
          </TableTitle>
          <TableBody>
            {addUser.map((user) => (
              <tr key={user.email}>
                <td>{user.name?.first + " " + user.name?.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.dob?.age}</td>
              </tr>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </Tablediv>
  );
};

export default Tables;
