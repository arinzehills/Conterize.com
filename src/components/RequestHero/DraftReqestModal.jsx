import React from "react";
import SaveButton from "../../pages/Dashboard/components/SaveButton/SaveButton";
import Loader from "../Loader/Loader";
import Modal2 from "../Modal/Modal2";
import { motion, AnimatePresence } from "framer-motion";

const DraftReqestModal = ({ onClick, setOpenModal, top, message }) => {
  let boolx = true;
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <AnimatePresence>
      <div className="addteam_backdrop" onClick={() => setOpenModal(false)}>
        <motion.div
          className="addteam_content_wrapper"
          style={{
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            flexDirection: "column",
            background: "white",
            // backdropFilter: blur("33px"),
            // transition: "all 0.3s ease-out",

            height: 300,
            width: 250,
            boxShadow: "var(--box-shadow)",
          }}
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
          onClick={stopPropagation}
        >
          <img src="/images/dullbaby.png" alt="ds" height={150} />
          <h4>{message ?? "Save as Draft?"}</h4>

          {!boolx ? (
            <div style={{ height: "40%", marginTop: "4rem" }}>
              <Loader position={"relative"} />
            </div>
          ) : (
            <SaveButton
              title="Personadsdsal Info"
              labels={["No", "Yes"]}
              onClick2={() => setOpenModal(false)}
              onClick={onClick}
            />
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DraftReqestModal;
