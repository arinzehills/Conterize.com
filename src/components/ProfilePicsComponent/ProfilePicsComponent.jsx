import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import "./ProfilePicsComponent.css";
const ProfilePicsComponent = ({ name, isCirclular, userType, isImage }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  console.log(openDropDown);

  const ProfileDropDown = ({ openDropDown, setOpenDropDown }) => {
    const stopPropagation = (event) => {
      event.stopPropagation();
    };
    const IconAndName = ({ iconName, title }) => {
      return (
        <div className="dashboard-card-row">
          <Icon
            icon={iconName ?? "healthicons:i-schedule-school-date-time"}
            fontSize={"20px"}
            color="gray"
          />
          <p>{title}</p>
        </div>
      );
    };
    return (
      <AnimatePresence>
        {openDropDown && (
          <>
            <motion.div
              className="profile_pics_dropDown_backdrop"
              onClick={() => setOpenDropDown(false)}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.7,
                },
              }}
              exit={{
                opacity: 0,
              }}
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
                className="profile_pics_drop_content"
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
                  className="profile_pics_dropDown_content"
                >
                  <IconAndName
                    title={"Teams"}
                    iconName={"gridicons:multiple-users"}
                  />
                  <IconAndName
                    title={"Settings"}
                    iconName={"clarity:settings-outline-badged"}
                  />
                  <IconAndName
                    title={"Profile"}
                    iconName={"iconoir:profile-circled"}
                  />
                  <IconAndName title={"Logout"} iconName={"uiw:logout"} />
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <ProfileDropDown
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />

      <div
        className={isCirclular ? "prf-container iscircular " : "prf-container "}
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        <div
          className={isCirclular ? "pic-wrapper iscircular" : "pic-wrapper "}
        >
          {isImage ? (
            <img src="/svg/avatar.svg" alt="" />
          ) : !name ? (
            "U"
          ) : (
            name.charAt(0)
          )}
        </div>

        <div
          className="pic-text"
          style={{
            justifyContent: isCirclular && "center",
          }}
        >
          <p
            style={{
              fontWeight: isCirclular ? "normal" : "bold",
              textAlign: "left",
            }}
          >
            {name}
          </p>
          {isCirclular !== true && <span>{userType ?? "User"}</span>}
        </div>
        {isCirclular && ( //if this is a circlular profile pics component show this icon
          <div className="prf-pic-icon">
            <Icon icon="ant-design:caret-up-filled" color="gray" vFlip={true} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePicsComponent;
