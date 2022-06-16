import React, { useEffect, useState } from "react";
import "./Company.css";
import "./CompaniesList.css";

import NavComponent from "../NavComponent/NavComponent";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import { Icon } from "@iconify/react";
import useUser from "../../../useUser";
import useFetch from "../../../useFetch";
import Modal2 from "../../../components/Modal/Modal2";

const Company = () => {
  const [click, setClick] = useOutletContext();
  const handleClick = () => setClick(!click);
  const history = useNavigate();
  const { user, setUser } = useUser();
  const [triggerRefresh, setTriggerRefresh] = useState(false);
  const {
    data: companyInfo,
    loading,
    error,
  } = useFetch({
    url: window.baseUrl + "getUserCompanies",
    secondParam: triggerRefresh,
    fetchParamData: {
      user_id: user?.["id"],
      // company_id: location.state.company_id,
    },
  });
  const deleteCompany = (event, id) => {
    event.stopPropagation();
    const url = window.baseUrl + "deleteCompany";
    const data = {
      company_id: id,
    };
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTriggerRefresh(!triggerRefresh);
      })
      .catch((error) => {
        console.warn("Error:", error);
      });
  };
  const CompaniesContainer = ({ onClick, item }) => {
    return (
      <>
        <div className="companies_container" onClick={onClick}>
          <div
            className="companies_container_name"
            style={{
              textOverflow: "ellipsis",
            }}
          >
            <h3 style={{ fontSize: "15px" }}>
              {item?.name ?? "Achillstechnologies"}
            </h3>
            <span>{item?.website_url ?? null}</span>
          </div>

          <div
            style={{
              fontSize: "30px",
              color: "var(--light-purple)",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Icon icon="akar-icons:circle-chevron-right-fill" />
          </div>
          <div
            id="delete_company"
            style={{ position: "absolute", marginTop: 130 }}
            onClick={(event) => deleteCompany(event, item.id)}
          >
            <Icon icon="fluent:delete-12-filled" />
          </div>
        </div>
      </>
    );
  };
  const NoCompanyAdded = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // width: "100%",
            // height: "10px",
          }}
        >
          <img src="/images/dullbaby.png" alt="" />
          <h3>No Companies Added</h3>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <NavComponent pageTitle="Companies" handleClick={handleClick} />
        {/* <DashboardInput inputSize="width-495" /> */}
        {/* this contains the add button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ textAlign: "left" }}>
            {companyInfo?.["company_info"].length} Companies added
          </h3>
          <Link
            to="/dashboard/addcompany"
            state={{
              isEdit: false,
              //  company_id: "dsds"
            }}
          >
            <Button buttonColor={"gradient"}>Add Company</Button>
          </Link>
        </div>
        <div
          className="companies_section"
          style={{
            display: companyInfo?.["company_info"].length === 0 && "flex",
          }}
        >
          {loading ? (
            <Modal2 />
          ) : companyInfo?.["company_info"].length === 0 ? (
            <NoCompanyAdded />
          ) : (
            companyInfo?.["company_info"].map((item) => (
              <CompaniesContainer
                item={item}
                onClick={() =>
                  history("/dashboard/addcompany", {
                    state: {
                      company_id: item.id,
                      isEdit: true,
                    },
                  })
                }
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Company;
