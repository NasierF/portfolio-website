import React from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { Card, CardContent, Typography, CardHeader, CardActions, Chip } from "@mui/material";
import { useRef, useEffect } from "react";

//pass in a use state of whether the card is currently highlighted or not, if it is add some animattions to add flare to the cards.

const TimelineCard = ({ title, date, type, linkTitle, linkUrl, isHighlighted }) => {
    const cardRef = useRef(null);

    // useEffect(() => {
    //     if (cardRef.current) {
    //         gsap.to(cardRef.current, {
    //             scale: isHighlighted ? 1.1 : 0.9, 
    //             opacity: isHighlighted ? 1 : 0.6, 
    //             duration: 0.3,
    //             ease: "power3.out",
    //         });
    //     }
    // }, [isHighlighted]); 


    return (
        <Card
            sx={(theme) => ({
                width: "100%",
                height: "100%",
                textAlign: "center",
                backgroundColor: "secondary.dark",
                border: isHighlighted 
                    ? `3px solid ${theme.palette.primary.main}` 
                    : `1px solid ${theme.palette.grey[500]}`,
                color: "white",
                borderRadius: "0.8rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                position: "relative",
            })}
        >
            <CardHeader
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    padding: "0rem 1rem",
                    backgroundColor: "secondary.dark",
                }}
                title={type} subheader={date}
                titleTypographyProps={{ color: "white", textAlign: "left", fontWeight: "bold", }}
                subheaderTypographyProps={{ color: "lightgray", textAlign: "left" }}
            />
            <CardContent>
                <Typography
                    sx={{
                        paddingTop: "20%",
                        whiteSpace: "wrap"
                    }}
                    variant="body2">{title}</Typography>
            </CardContent>
            {/* if a link is passed in render it in an additional section */}
            {linkTitle && linkUrl && (
                <CardActions sx={{ justifyContent: "center", paddingBottom: "1rem",  position: "absolute",bottom: 10 }}>
                    <Chip
                        label={linkTitle}
                        component="a"
                        href={linkUrl}
                        clickable
                        sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            "&:hover": { backgroundColor: "primary.dark" },
                            bottom: 0,
                            right: 0,
                        }}
                    />
                </CardActions>
            )}
        </Card>
    );
}

TimelineCard.propTypes = {//ensure prop types in case of error when writing data
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired,
    LinkUrl: PropTypes.string.isRequired,
    isHiglighted: PropTypes.bool.isRequired,
};

export default TimelineCard