import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import timelineData from "@data/timelineData";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "scroll",
        padding: "20px",
        gap: "40px", // Space between entries
        alignItems: "center",
        "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
        position: "relative",
      }}
    >
      {timelineData.map((entry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          style={{ position: "relative", minWidth: "200px" }}
        >
          {/* Green Line */}
          {index < timelineData.length - 1 && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "100%",
                transform: "translateY(-50%)",
                height: "4px",
                width: "40px", // Adjust for spacing between cards
                backgroundColor: "primary.main",
              }}
            ></Box>
          )}
          {/* Timeline Entry */}
          <Box
            sx={{
              padding: "16px",
              backgroundColor: "background.paper",
              borderRadius: "8px",
              boxShadow: 1,
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {entry.date}
            </Typography>
            <Typography variant="h6">{entry.title}</Typography>
            {entry.description && (
              <Typography variant="body2" color="text.secondary">
                {entry.description}
              </Typography>
            )}
            <Chip
              label={entry.type.toUpperCase()}
              color="primary"
              size="small"
              sx={{ mt: 1 }}
            />
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default Timeline;
