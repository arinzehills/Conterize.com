import React from "react";
import "./GuaranteHero.css";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function GuaranteeHero({ headline, descArr }) {
  const header = "Conterize Guaranteed Quality Assurance";

  return (
    <>
      <div className="guarantee_section">
        <div className="guarantee_container">
          <h2
            className=""
            style={{
              textAlign: "center",
              padding: 0,
              color: "var(--dark-blue)",
            }}
          >
            {headline ?? header}
          </h2>
          <hr></hr>
          <div className="guant_column">
            {descArr.map((item) => (
              <div className="guant_row" key={item}>
                <HiOutlineBadgeCheck
                  className="g_icon"
                  style={{ color: "var(--mypurple)" }}
                />
                <p className="guarantee_p" key={item}>
                  {item}
                </p>
              </div>
            ))}
          </div>
          <Link to="/creatorsregistration">
            <Button buttonColor={"gradient"}>Join Now</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GuaranteeHero;
