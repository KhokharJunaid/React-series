import React from "react";
import styles from "./NewTable.module.css";

function NewTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subjects</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Junaid</td>
            <td>OOP</td>
            <td>87.7%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NewTable;
