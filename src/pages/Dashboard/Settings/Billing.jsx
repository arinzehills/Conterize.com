import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "../../../components/Button/Button";
import useUser from "../../../useUser";
import DashboardInput from "../components/DashboardInput/DashboardInput";
import SaveButton from "../components/SaveButton/SaveButton";
import NoDataFound from "../Request/NoDataFound";

const Billing = () => {
  const { user, setUser } = useUser();

  return (
    <>
      <div
        className="company-container"
        style={{ width: window.innerWidth > 960 && "110%" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3
            style={{
              textAlign: "left",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Billing Information
          </h3>
          {window.innerWidth > 763 && (
            <SaveButton
              title="Personal Info"
              labels={["Delete ", "Change Card"]}
              secondBtnSize="140px"
            />
          )}
        </div>
        <div className="company-row">
          <div
            className="company-col"
            style={{
              border: "1px solid #ececec",
              borderRadius: "10px",
              width: "40rem",
              textAlign: "left",
              padding: "0.5rem",
            }}
          >
            {/* goes bottom-to-top */}
            <span
              className="guarantee_p"
              style={{ fontSize: "14px", paddingLeft: 0 }}
            >
              This account subscription is billed to
            </span>

            <h3
              style={{
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  border: "1px solid #ececec",
                  padding: "0.5rem",
                }}
              >
                {user?.pm_type === "visa" ? (
                  <Icon icon="logos:visaelectron" />
                ) : user?.pm_type === "mastercard" ? (
                  <Icon icon="logos:mastercard" />
                ) : (
                  <Icon
                    icon="fontisto:american-express"
                    className="blue"
                    fontSize={"23px"}
                  />
                )}
              </div>
              {user?.pm_type} Card Ending in {user?.pm_last_four}
            </h3>
          </div>
        </div>
        {/* person info for smaller screens */}
        {window.innerWidth < 763 && (
          <SaveButton
            title="Personal Info"
            labels={["Delete Card", "Change Card"]}
          />
        )}
      </div>
      <div
        className="company-container"
        style={{ width: window.innerWidth > 960 && "110%" }}
      >
        <h3
          style={{
            textAlign: "left",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          Billing Plan
        </h3>

        <div className="company-row">
          <div className="company-col">
            {/* goes bottom-to-top */}
            <h3>Plan</h3>
            <DashboardInput
              // value={formValues.personal_info}
              name="personal_info"
              label={user?.["plan"] + " "}
              // onHandleChange={handleChange}
              readOnly={true}
            />
          </div>
          <div className="company-col">
            <h3>Price</h3>

            <DashboardInput
              value={
                (user?.["plan"] === "Starter"
                  ? "$595"
                  : user?.["plan"] === "Growth"
                  ? "$$1,295"
                  : "$2,495") + "/month"
              }
              placeholder={user?.["email"]}
            />
          </div>
          <div className="company-col">
            <h3>Payment Status</h3>

            <DashboardInput
              // value={user?.["payment_status"]}
              readOnly={true}
              label={user?.["payment_status"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
