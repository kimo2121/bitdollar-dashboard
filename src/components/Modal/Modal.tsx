import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./modal.css";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const style = {
  position: "absolute" as "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "50%",
  bgcolor: "rgba(0, 0, 0, 0.616)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <HiMenu onClick={handleOpen} className="slide-menu-icon" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-content">
            <AiOutlineClose
              onClick={handleClose}
              className="modal-close-icon"
            />
            <Link
              onClick={handleClose}
              smooth={true}
              duration={800}
              to="Features"
            >
              Features
            </Link>
            <Link
              onClick={handleClose}
              smooth={true}
              duration={800}
              to="Participate"
            >
              Participate
            </Link>
            <Link
              onClick={handleClose}
              smooth={true}
              duration={800}
              to="Tokenomics"
            >
              Tokenomics
            </Link>
            <Link onClick={handleClose} smooth={true} duration={800} to="Team">
              Team
            </Link>
            <Link
              onClick={handleClose}
              smooth={true}
              duration={800}
              to="Partners"
            >
              Partners
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
