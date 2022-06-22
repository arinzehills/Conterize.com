import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/Button/Button";
import Modal2 from "../../../components/Modal/Modal2";
import ProfilePicsComponent from "../../../components/ProfilePicsComponent/ProfilePicsComponent";
import useFetch from "../../../useFetch";
import useUser from "../../../useUser";
import FreelancersModal from "../../Admin/Freelancers/FreelancersModal";
import IconAndName, { StatusWidget } from "./IconsWidget";
import NoDataFound from "./NoDataFound";
import "./RequestTable.css";
const RequestTable = ({
  messageNotFound,
  isAdmin,
  title,
  data,
  loading,
  columnData,
  activeRow,
  setActiveRow,
  onClickRow,
  runDefualtFunc, //this is to determine wether to run the deafault select multiple items or run your own custom function pass as prop(i.e onClickRow Function) here
}) => {
  const [showAssignFreelacer, setShowAssignFreelacer] = useState(false);
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
  const TableHeadItem = ({ item, index }) => (
    <th key={index}>
      {item.heading} <CaretIcon />
    </th>
  );
  const TableRow = ({ item, column, isAdmin, index, onClick, activeRow }) => (
    <tr
      onClick={onClick}
      style={{ background: activeRow === true && "var(--success)" }}
      key={index}
    >
      {isAdmin ? (
        <td key={index}>
          {activeRow === true ? (
            <Icon
              icon="akar-icons:check-box-fill"
              color="white"
              fontSize={25}
            />
          ) : (
            <Icon icon="bx:checkbox" color="gray" fontSize={25} />
          )}
        </td>
      ) : (
        <td>{index + 1}</td>
      )}
      {column.map((columnItem, index) => {
        return (
          <td key={index}>
            {columnItem.value === "request_name" ? (
              <IconAndName
                title={item[`${columnItem.value}`] ?? "Content Marketing"}
                type={item[`category`] ?? ""}
              />
            ) : columnItem.value === "submitted_by" ? (
              <IconAndName
                title={item[`${columnItem.value}`] ?? "date"}
                type={"calendar"}
              />
            ) : columnItem.value === "status" ? (
              <StatusWidget
                title={item[`${columnItem.value}`] ?? ""}
                status={item[`${columnItem.value}`] ?? ""}
              />
            ) : columnItem.value === "assign_to" ? (
              <ProfilePicsComponent
                name={item[`${columnItem.value}`] ?? "Hills"}
                isCirclular={true}
                isImage={true}
              />
            ) : (
              item[`${columnItem.value}`]
            )}
          </td>
        );
      })}
    </tr>
  );
  const handleActiveRow = (index) => () => {
    // setActiveRow(!activeRow);
    setActiveRow((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };

  let objHasSelected = Object.values(activeRow).some((value) => value === true);
  // console.log(showAssignFreelacer);
  // console.log(activeRow);

  const [requestToReassign, setRequestToReassign] = useState([]);

  useEffect(() => {
    // setRequestToReassign([]);
    for (const [key, value] of Object.entries(activeRow)) {
      if (value === objHasSelected) {
        setRequestToReassign([...requestToReassign, data[`${key}`]]);
      }
    }
    if (objHasSelected === false) {
      setRequestToReassign(requestToReassign, []);
    }
  }, [activeRow]);

  return (
    <>
      {showAssignFreelacer && (
        <FreelancersModal
          setOpenModal={setShowAssignFreelacer}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
          objHasSelected={objHasSelected}
          data={data}
          setshowAssignFreelacer={setShowAssignFreelacer}
          requestToReassign={requestToReassign}
          setRequestToReassign={setRequestToReassign}
        />
      )}
      <div className="request-tabel-section">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{title ?? ""}</h3>
          {/* {activeRow === true && (
            <Button buttonColor={"gradient"}>Assign Freelancer</Button>
          )} */}

          <div className={objHasSelected ? "payment " : "payment none"}>
            {isAdmin && (
              <Button
                buttonColor={"gradient"}
                onClick={() => {
                  setShowAssignFreelacer(true);
                  // handleAssignFreelancer();
                }}
              >
                Assign Freelancer
              </Button>
            )}
          </div>
        </div>

        <table className="request-tabel-container">
          <thead>
            <tr>
              <th>#</th>
              {columnData.map((item, index) => (
                <TableHeadItem item={item} index={index} key={index} />
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Modal2 />
            ) : (
              data
                // requestss
                .map((item, index) => (
                  <TableRow
                    key={index}
                    item={item}
                    index={index}
                    column={columnData}
                    isAdmin={isAdmin}
                    activeRow={activeRow[index]}
                    // activeRow={activeRow}
                    // onClick={handleActiveRow}
                    onClick={
                      runDefualtFunc === false
                        ? () => onClickRow(item)
                        : handleActiveRow(index)
                    }
                  />
                ))
            )}
            {/* /* {window.innerWidth > 740 && <td>{request.category ?? ""}</td>} */}
            {/* {window.innerWidth > 740 && (
                    <td>
                      <ProfilePicsComponent
                        name={request.assign_to ?? "Hills"}
                        isCirclular={true}
                      />
                    </td>
                  )}
                  {window.innerWidth > 740 && (
                    <td>
                      <IconAndName title={"20/04/2022"} type="calendar" />
                    </td>
                  )}
                  <td>
                    <StatusWidget
                      title={request.status ?? ""}
                      status={request.status ?? ""}
                    />
                  </td> */}
          </tbody>
        </table>
        {data?.length === 0 && <NoDataFound message={messageNotFound} />}
      </div>
    </>
  );
};

export default RequestTable;
