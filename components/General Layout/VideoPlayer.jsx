import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from "video-react";
import "node_modules/video-react/dist/video-react.css";

export default function VideoPlayer({ src }) {
  return (
    <Player src={src} preload={"metadata"} playsInline>
      <BigPlayButton position="center" />
      <ControlBar autoHide={false}>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        <VolumeMenuButton />
      </ControlBar>
    </Player>
  );
}
