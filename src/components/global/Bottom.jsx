import * as React from 'react';
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { data } from "../../data/mockData";
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';

const Bottombar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const rows = data(data);

  const [red, setRed] = React.useState(false);
  const handleRed = () => setRed(true);
  const handleCloseRed = () => setRed(false);

  const [green, setGreen] = React.useState(false);
  const handleGreen = () => setGreen(true);
  const handleCloseGreen = () => setGreen(false);

  const [white, setWhite] = React.useState(false);
  const handleWhite = () => setWhite(true);
  const handleCloseWhite = () => setWhite(false);

  const matches = useMediaQuery('(min-width:600px)');

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

  return (
    <Box padding="0 10%">
        <Box display="grid" justifyContent="center" p="10% 0 2% 0">
            <Typography variant="h2" color={colors.primary[100]} borderBottom="1px solid #7f8383" textTransform="uppercase" lineHeight="50px">
                {rows.bottom[0]["title"]}
            </Typography>
        </Box>
    <Box display="grid" justifyContent="center" p="10px" gridTemplateColumns="repeat(3, 1fr)" className={`res-${matches}`}>
        <Box
        padding="0 1%"
        >

          <Box
            gridColumn="none"
            gridRow="none"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >

            <img
            srcSet={`${rows.bottom[1][1]}`}
            src={`${rows.bottom[1][1]}`}
            alt={rows.bottom[1][2]}
            loading="lazy"
            width ="100%"
            onClick={handleRed}
            />

            <Modal
              open={red}
              onClose={handleCloseRed}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  srcSet={`${rows.bottom[1][1]}`}
                  src={`${rows.bottom[1][1]}`}
                  alt={rows.bottom[1][2]}
                  loading="lazy"
                  width ="100%"
                />
              </Box>
            </Modal>

            <Typography variant="h5" color={colors.primary[900]} fontWeight="700" textAlign="center">
                {rows.bottom[1][2]}
            </Typography>

            <Typography variant="span" color={colors.primary[800]} padding=" 0 20px" display="block">
                {rows.bottom[1][3]}
            </Typography>
          </Box>
        </Box>

        <Box
          padding="0 1%"
        >

          <Box
            gridColumn="none"
            gridRow="none"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <img
            srcSet={`${rows.bottom[2][1]}`}
            src={`${rows.bottom[2][1]}`}
            alt={rows.bottom[2][2]}
            loading="lazy"
            width ="100%"
            onClick={handleGreen}
            />

            <Modal
              open={green}
              onClose={handleCloseGreen}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  srcSet={`${rows.bottom[2][1]}`}
                  src={`${rows.bottom[2][1]}`}
                  alt={rows.bottom[2][2]}
                  loading="lazy"
                  width ="100%"
                />
              </Box>
            </Modal>

            <Typography variant="h5" color={colors.primary[900]} fontWeight="700" textAlign="center">
                {rows.bottom[2][2]}
            </Typography>

            <Typography variant="span" color={colors.primary[800]} padding=" 0 20px" display="block">
                {rows.bottom[2][3]}
            </Typography>
          </Box>
        </Box>

        <Box
          padding="0 1%"
        >

          <Box
            gridColumn="none"
            gridRow="none"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >

          <img
            srcSet={`${rows.bottom[3][1]}`}
            src={`${rows.bottom[3][1]}`}
            alt={rows.bottom[3][2]}
            loading="lazy"
            width ="100%"
            onClick={handleWhite}
          />

          <Modal
            open={white}
            onClose={handleCloseWhite}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img
                srcSet={`${rows.bottom[3][1]}`}
                src={`${rows.bottom[3][1]}`}
                alt={rows.bottom[3][2]}
                loading="lazy"
                width ="100%"
              />
            </Box>
          </Modal>

            <Typography variant="h5" color={colors.primary[900]} fontWeight="700" textAlign="center">
                {rows.bottom[3][2]}
            </Typography>

            <Typography variant="span" color={colors.primary[800]} padding=" 0 20px" display="block">
                {rows.bottom[3][3]}
            </Typography>
          </Box>
        </Box>
    </Box>
    </Box>
  );
};

export default Bottombar;
