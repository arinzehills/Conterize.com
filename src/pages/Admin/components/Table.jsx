import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import "./Table.css";
const Table = ({ data }) => {
  // let [columnData, setColumnData] = useState([]);
  let columnData = [];

  const setDatasets = () => {
    data.th.map((item) => {
      console.log(item);
      columnData.concat(item);
      // columnData.push(item);
      // setColumnData(item);
    });
  };
  console.log(columnData);
  useEffect(() => {
    setDatasets();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            {data.th.map((item) => (
              <th className="th">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tabel_t_body">
          {data.tr.map((item, index) => (
            <tr key={index}>
              <td>
                <Icon icon="bx:checkbox" color="gray" fontSize={25} />
              </td>
              {/* {item.td.map((tData) => ( */}
              <td>{index}</td>
              <td>{index}</td>
              <td>{index}</td>
              <td>{index}</td>
              <td>{index}</td>
              <td>{index}</td>
              <td>{index}</td>
              {/* ))} */}
              {/* <td>{tData.value}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
