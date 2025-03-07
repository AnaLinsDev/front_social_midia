"use client";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

// import styles from "./posts_modal_create.module.scss";

interface PostModalCreateProps {
  open: boolean;
  handleClose: () => void;
}

export default function PostModalCreate({
  open,
  handleClose,
}: PostModalCreateProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue="No que está pensando ?"
          />
        </div>
      </Box>
    </Modal>
  );
}

export { PostModalCreate };
