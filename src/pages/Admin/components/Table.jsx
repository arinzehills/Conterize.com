import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";
import Modal2 from "../../../components/Modal/Modal2";
import DraftReqestModal from "../../../components/RequestHero/DraftReqestModal";
import NoDataFound from "../../Dashboard/Request/NoDataFound";
import "./Table.css";
const Table = ({
  data,
  columnData,
  loading,
  loaderType,
  isAdmin,
  setAssignFreelancerName,
  handleAssignFreelancer,
  messageNotFound,
}) => {
  const [showAssignModal, setShowAssignModal] = useState(false);

  const TableHeadItem = ({ item }) => (
    <th>
      {item.heading} <CaretIcon />
    </th>
  );
  const handleClickRow = () => {};
  const TableRow = ({ item, column, index }) => (
    <tr onClick={() => console.log(item["firstname"])}>
      {column.map((columnItem, index) => {
        return <td>{item[`${columnItem.value}`]}</td>;
      })}
      {isAdmin && (
        <Button
          buttonColor={"pink"}
          style={{ height: "40px", marginBottom: "0.5rem", width: "105px" }}
          onClick={() => {
            setShowAssignModal(true);
            setAssignFreelancerName(item["firstname"]);
          }}
        >
          Assign
        </Button>
      )}
    </tr>
  );
  return (
    <>
      {showAssignModal && (
        <DraftReqestModal
          top={0}
          message={"Confirm Assign! "}
          onClick={handleAssignFreelancer}
          onClick2={() => {
            // setIsDraft("no");
            setShowAssignModal(false);
          }}
        />
      )}
      <table>
        <thead>
          <tr>
            {columnData.map((item, index) => (
              <TableHeadItem item={item} />
            ))}
          </tr>
        </thead>
        <tbody className="tabel_t_body">
          {loading ? (
            loaderType === "modal" ? (
              <Modal2 />
            ) : (
              <Loader position={"fixed"} top={"10%"} left={"20%"} />
            )
          ) : data?.length === 0 ? (
            <NoDataFound message={messageNotFound} />
          ) : (
            data.map((item, index) => (
              <TableRow
                item={item}
                column={columnData}
                index={index}
                setShowAssignModal={setShowAssignModal}
                isAdmin={isAdmin}
                setAssignFreelancerName={setAssignFreelancerName}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};
const CaretIcon = () => {
  return (
    <>
      <Icon
        color="grey"
        icon="bxs:up-arrow"
        rotate={2}
        style={{ borderRadius: "10px" }}
      />
    </>
  );
};

export default Table;
