import Spotify from "./Spotify";
import Github from "./Github";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ChartBarIcon,
  MicrophoneIcon,
  RectangleStackIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

export { Spotify };

export const STRING_TO_ICON = {
  spotify: Spotify,
  github: Github,
  "chevron-down": ChevronDownIcon,
  "chart-bar": ChartBarIcon,
  microphone: MicrophoneIcon,
  "rectangle-stack": RectangleStackIcon,
  play: PlayIcon,
};
