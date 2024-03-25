import React from 'react';
import Typography from '@mui/material/Typography';

const NewBadge = () => {
  return (
    <Typography
      variant="body2"
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "-10px",
        right: "50%",
        transform: "translate(50%, -50%)",
        padding: "5px",
        paddingTop: "3px",
        backgroundColor: "#E02D2D",
        color: "#ffffff",
        borderRadius: "4px",
        fontSize: "10px",
        width: "30px",
        height: "10px",
      }}
    >
      New!
      <span
        style={{
          position: "absolute",
          content: "''",
          borderStyle: "solid",
          borderWidth: "5px 4px 0 4px",
          borderColor: "#E02D2D transparent transparent transparent",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-5px",
        }}
      ></span>
    </Typography>
  );
};

export default NewBadge;
