import React, { useState } from "react";
import "./SettingsTab.css";

const SettingsTabs = ({ currentTab, setCurrentTab }) => {
  return (
    <>
      <div
        style={{ paddingLeft: 0, display: "flex", gap: "1rem" }}
        className={"guarantee_p"}
      >
        <div
          className={
            currentTab === 1 ? "settings_tabs showtab" : "settings_tabs"
          }
          onClick={() => setCurrentTab(1)}
        >
          Account
        </div>
        <div
          className={
            currentTab === 2 ? "settings_tabs showtab" : "settings_tabs"
          }
          onClick={() => setCurrentTab(2)}
        >
          Billing
        </div>
      </div>
    </>
  );
};

export default SettingsTabs;
