import { Stack, Box, Typography, CircularProgress } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Video = ({ videos, direction }) => {
  if (!videos?.length)
    return (
      <Box minHeight="95vh">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="80vh"
        >
          <CircularProgress />
        </Stack>
      </Box>
    );
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Video;
