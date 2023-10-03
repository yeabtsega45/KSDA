import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="table_container">
      <table>
        <tr>
          <th colSpan="4" style={{ textAlign: "center" }}>
            የኮተቤ አድቬንቲስት ቤተክርስትያን የአባልነት መመዝገቢያ ቅጽ
          </th>
          <th rowSpan="5" style={{ textAlign: "center" }}>
            ፎቶ
          </th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ስም፦</td>
          <td></td>
          <td>የአባት ስም ፦</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>የአያት ስም፦</td>
          <td></td>
          <td>የእናት ስም፦ </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ጾታ</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default Form;
