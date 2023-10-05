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
          <td rowSpan="3">ጾታ</td>
          <td>ወንድ</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ሴት</td>
          <td></td>
          <td></td>
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
          <td rowSpan="3">ኢሜል አድራሻ</td>
          <td rowSpan="3"></td>
          <td rowSpan="3">የትዳር ሁኔታ</td>
          <td>ያገባ</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>ያላገባ</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default Form;
