import * as React from 'react';
import { Box, useTheme, Typography, Link } from "@mui/material";
import { tokens } from "../../theme";
import { data } from "../../data/mockData";
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const rows = data(data);

  const [cook, setCook] = React.useState(false);
  const handleCook = () => setCook(true);
  const handleCloseCook = () => setCook(false);

  const [experiment, setExperiment] = React.useState(false);
  const handleExperiment = () => setExperiment(true);
  const handleCloseExperiment = () => setExperiment(false);

  const [egg, setEgg] = React.useState(false);
  const handleEgg = () => setEgg(true);
  const handleCloseEgg = () => setEgg(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #cf1430',
    boxShadow: 24,
    outline: 'none',
    p: 0,
  };

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box padding="7% 10% 0">
    <Box display="grid" justifyContent="center" p="10px" gridTemplateColumns="repeat(3, 1fr)" className={`res-${matches}`}>
        <Box
        padding="0 1%"
        >
          <img
          srcSet={`${rows.top[1][1]}`}
          src={`${rows.top[1][1]}`}
          alt={rows.top[1]["alt"]}
          loading="lazy"
          width ="100%"
          onClick={handleCook}
          />

          <Modal
            open={cook}
            onClose={handleCloseCook}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img
                srcSet={`${rows.top[1][1]}`}
                src={`${rows.top[1][1]}`}
                alt={rows.top[1][2]}
                loading="lazy"
                width ="100%"
              />
            </Box>
          </Modal>
        </Box>

        <Box
        padding="0 1%"
        >

    
          <img
          srcSet={`${rows.top[2][1]}`}
          src={`${rows.top[2][1]}`}
          alt={rows.top[2]["alt"]}
          loading="lazy"
          width ="100%"
          onClick={handleExperiment}
          />

          <Modal
            open={experiment}
            onClose={handleCloseExperiment}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img
                srcSet={`${rows.top[2][1]}`}
                src={`${rows.top[2][1]}`}
                alt={rows.top[2][2]}
                loading="lazy"
                width ="100%"
              />
            </Box>
          </Modal>

          <img
            srcSet={`${rows.top[3][1]}`}
            src={`${rows.top[3][1]}`}
            alt={rows.top[3]["alt"]}
            loading="lazy"
            width ="100%"
            onClick={handleEgg}
          />
          <Modal
            open={egg}
            onClose={handleCloseEgg}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img
                srcSet={`${rows.top[3][1]}`}
                src={`${rows.top[3][1]}`}
                alt={rows.top[3][2]}
                loading="lazy"
                width ="100%"
              />
            </Box>
          </Modal>
        </Box>

        <Box
        padding="0 1%"
        >

          <Typography variant="h2" color={colors.primary[100]} borderBottom="1px solid #7f8383" textTransform="uppercase" lineHeight="35px" m="10px">
                {rows.top[0]["title"]}
          </Typography>

          <Typography variant="span" color={colors.primary[800]} padding="20px 10px" display="block">
                {rows.top[4]["content"]}
          </Typography>

          <Link
            component="button"
            variant="body2"
            color={colors.primary[700]}
            textTransform="uppercase"
            fontWeight="700"
            m="0 10px !important"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            {rows.top[5]["text"]}
          </Link>

          <Typography variant="span" color={colors.primary[900]} m="10px" display="block" fontWeight="700">
                {rows.top[6]["less"]}
          </Typography>
        </Box>
    </Box>
    </Box>
  );
}
export default Topbar;

