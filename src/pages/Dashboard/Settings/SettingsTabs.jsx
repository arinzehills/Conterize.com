import React, { useState } from "react";
import "./SettingsTab.css";

const SettingsTabs = ({
  currentTab,
  setCurrentTab,
  title1,
  title2,
  title3,
}) => {
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
          {title1 ?? "Account"}
        </div>
        <div
          className={
            currentTab === 2 ? "settings_tabs showtab" : "settings_tabs"
          }
          onClick={() => setCurrentTab(2)}
        >
          {title2 ?? "Billing"}
        </div>
        <div
          className={
            currentTab === 3 ? "settings_tabs showtab" : "settings_tabs"
          }
          onClick={() => setCurrentTab(3)}
        >
          {title3}
        </div>
      </div>
    </>
  );
};

export default SettingsTabs;
