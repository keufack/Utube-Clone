import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import Video from "./Video";
import { fetchFromAPI } from "./utils/fetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for:<span style={{ color: "#FC1503" }}>{searchTerm}</span>{" "}
        Videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Video videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
