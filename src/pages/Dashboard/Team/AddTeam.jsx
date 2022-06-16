import React, { useState } from "react";
import "./Team.css";
import { motion, AnimatePresence } from "framer-motion";
import SaveButton from "../components/SaveButton/SaveButton";
import DashboardInput from "../components/DashboardInput/DashboardInput";

const AddTeam = ({ openModal, setOpenModal, children }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <AnimatePresence>
      {openModal && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
            }}
            className="addteam_backdrop"
            onClick={() => setOpenModal(false)}
          >
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{ scale: 0 }}
              className="addteam_content_wrapper"
              onClick={stopPropagation}
            >
              <motion.div
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.7,
                  },
                }}
                exit={{ opacity: 0, x: 100 }}
                className="addteam_content"
              >
                {children ?? (
                  <div>
                    <h2 style={{ marginBottom: 0 }}>Add Team Member</h2>
                    <span
                      style={{ color: "grey", fontSize: 11, lineHeight: 0.5 }}
                    >
                      Add a member that will work with you wished with you on
                      this account, an login details will be send them to have
                      access
                    </span>
                    <h3>First Name</h3>
                    <DashboardInput
                      inputStyle="input--outline"
                      label="Enter email address"
                      style={{
                        width: window.innerWidth > 769 ? "460px" : "300px",
                      }}
                    />
                    <h3>Last Name</h3>
                    <DashboardInput
                      style={{
                        width: window.innerWidth > 769 ? "460px" : "300px",
                      }}
                      inputStyle="input--outline"
                      label="Enter email address"
                    />
                    <h3>Email Address</h3>
                    <DashboardInput
                      style={{
                        width: window.innerWidth > 769 ? "460px" : "300px",
                      }}
                      inputStyle="input--outline"
                      label="Enter email address"
                      // name={inputNames[2]}
                      // value={inputValues[2]}
                      // onHandleChange={handleChange}
                    />
                    {/* {children} */}
                    <SaveButton
                      //   onClick={updateCompany}
                      // onClick={handleNot}
                      onClick2={() => setOpenModal(false)}
                      labels={["Cancel", "Save"]}
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddTeam;
