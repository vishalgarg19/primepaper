import React from "react";
import "./Infrastructure.css";
import Section1 from "./section/Section";

const Infrastructure = () => {
  return (
    <div className="infrastructure">
      <div className="infrastructure-h1">
        <h1>Infrastructure</h1>
      </div>
      {/* <div className="section-1">
        <p>The Units in Our Facility are:</p>
        <div className="black-white">
          <div>
            <p>Production Department</p>
          </div>
          <div>
            <p>Quality Testing Unit</p>
          </div>
          <div>
            <p>Research and Development Unit</p>
          </div>
          <div>
            <p>Packaging Unit</p>
          </div>
          <div>
            <p>Warehouse Unit</p>
          </div>
        </div>
      </div> */}
      <Section1 />
      <div className="section-2">
        <div className="table-one">
          <p>PLANT AREA</p>
          <table>
            <tr>
              <td>Shop floor area</td>
              <td>2,380sqm</td>
            </tr>
            <tr>
              <td>FG storage area and RM area</td>
              <td>3,236sqm</td>
            </tr>
            <tr>
              <td>Road and green open area</td>
              <td>3,024sqm</td>
            </tr>
            <tr>
              <td>Total plot area</td>
              <td>8,640sqm</td>
            </tr>
          </table>
        </div>
        <div className="specification">
          <div>
            <p className="specification-p">CAPACITY</p>
            <p>2,000 Tonnes Per Month / 24,000 Tonnes Per Annum</p>
          </div>
          <div>
            <p className="specification-p">UTILIZED CAPACITY</p>
            <p>700 Tonnes Per Month / 8,400 Tonnes Per Annum</p>
          </div>
          <div>
            <p className="specification-p">SPACE CAPACITY</p>
            <p>1,300 Tonnes Per Month / 15,600 Tonnes Per Annum</p>
          </div>
        </div>
      </div>
      <div className="section-3">
        <p>MACHINERY INSTALLED</p>
        <div>
          <p>Details of 3/5 ply Fully Automatic Corrugation Line</p>
          <table>
            <tr>
              <th>S. NO.</th>
              <th>MODEL</th>
              <th>DESCRIPTION</th>
              <th>UNIT</th>
              <th>SIZE</th>
            </tr>
            <tr>
              <td>1.</td>
              <td></td>
              <td>
                Xinguang high speed 5 ply automatic board Plant (Steam Heating)
                consisting of following:
              </td>
              <td></td>
              <td>62"</td>
            </tr>
            <tr>
              <td></td>
              <td>SF320-C-1800</td>
              <td>Corrugation Machine (B and C flute)</td>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>XV5B-1800</td>
              <td>Hydraulic mill roll stand</td>
              <td>5</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                Duplex overhead bridge with take up unit conveyor belt and web
                adjusting arrangement
              </td>
              <td>1</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>RO9B-1800</td>
              <td>Pre heater for paper</td>
              <td>4</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>GM20-1800</td>
              <td>Glue machine</td>
              <td>1</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>WJ150-1800-II</td>
              <td>
                Double baker unit with hot plates cooling section pull roll
                stand and conveyor belt
              </td>
              <td>1</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>NCBD-1800</td>
              <td>
                NC Slitter scorer with high quality imported computer & PLC
                control
              </td>
              <td>1</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>NCR150-1800</td>
              <td>
                NC Cutter unit with PIV gearbox with cutting capacity of min 500
                mm and max 9999 mm.
              </td>
              <td>1</td>
              <td></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>SMYKM1600-G-D</td>
              <td>
                J-Star automatic flexo Printing slotting die cutting machine
              </td>
              <td>1</td>
              <td>63''x87''</td>
            </tr>
            <tr>
              <td>3.</td>
              <td></td>
              <td>Natraj Auto folding glue machine</td>
              <td>1</td>
              <td>43''x82''</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="section-4">
        <div>
          <p>Details of Semi-Automatic 2 ply Corrugation Machine</p>
          <table>
            <tr>
              <th>S NO.</th>
              <th>DESCRIPTION</th>
              <th>UNIT</th>
              <th>SIZE</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Semi-Automatic Corrugation Machine</td>
              <td>1</td>
              <td>85''</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Pasting Machine</td>
              <td>3</td>
              <td>85''</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Rotary</td>
              <td>2</td>
              <td>85''</td>
            </tr>
            <tr>
              <td rowSpan="2">4.</td>
              <td rowSpan="2">Die cutting machine</td>
              <td rowSpan="1">1</td>
              <td rowSpan="1">52''x72''</td>
            </tr>
            <tr>
              <td rowSpan="1">2</td>
              <td rowSpan="1">45''x65''</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Steam Boiler</td>
              <td>1</td>
              <td>2 Ton</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Generator sets</td>
              <td>1</td>
              <td>160 KVA</td>
            </tr>
            <tr>
              <td rowSpan="2">8.</td>
              <td rowSpan="2">Stitching Machine</td>
              <td>5</td>
              <td>48''</td>
            </tr>
            <tr>
              <td>1</td>
              <td>56''</td>
            </tr>
          </table>
        </div>
        <div className="last-table">
          <table>
            <tr>
              <th colspan="4">Add Your Heading Text Here</th>
            </tr>
            <tr>
              <td>GSM Digital Tester</td>
              <td>2</td>
            </tr>
            <tr>
              <td>BS and BF</td>
              <td>2</td>
            </tr>
            <tr>
              <td>COBB Tester</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Electronic weight scale</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Moisture Tester</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Compression tester</td>
              <td>2</td>
            </tr>
            <tr>
              <td>RCT & ECT tester</td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
