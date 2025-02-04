import React from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { Card, CardContent, Typography} from "@mui/material";



const TimelineCard = ({title, date}) => {
return(
<Card
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        textAlign: "center",
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.main}`, // ✅ Correct border syntax
        color: "white",
        borderRadius: "0.8rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 3,
      })}
    >
      <CardContent>
        <Typography variant="body2">{title}</Typography>
        <Typography variant="body2">{date}</Typography>
      </CardContent>
    </Card>
);
}

TimelineCard.propTypes = {//ensure prop types in case of error when writing data
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default TimelineCard