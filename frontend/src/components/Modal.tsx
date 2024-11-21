import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormDataTask from "./FormDataTask";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  fetchTasks: () => void; // Definición del prop para recibir la función
}

export default function BasicModal({fetchTasks}: BasicModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}
        sx={{
          position: 'relative',
          top: { xs: '10px', sm: '20px' },
          right: { xs: '1px', sm: '20px' },
          left: { xs: '99%', sm: '90%', md: '75%', lg: '70%', xl: '68%' },
          fontSize: { xs: '0.8rem', sm: '1rem' },
          padding: { xs: '5px 10px', sm: '8px 16px' },
        }}>
          Agregar tarea
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormDataTask fetchTasks={() => {
            fetchTasks();
            handleClose();          
        }}/>
        </Box>
      </Modal>
    </div>
  );
}