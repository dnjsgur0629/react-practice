import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

function IconLabelButtons() {
  return (
      <Stack direction="row" spacing={4} padding={2}>
        <Button variant="outlined" color="warning" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" color="success" endIcon={<SendIcon />} size="large">
          Send
        </Button>
        <Button variant="contained" color="secondary" endIcon={<SaveIcon />} size="small">
          Save
        </Button>
      </Stack>
  );
}

export default IconLabelButtons;