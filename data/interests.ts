import {
  PiGameControllerBold,
  PiVinylRecordBold,
} from "react-icons/pi";

import { TbMoodNerd } from "react-icons/tb";

import { IconType } from "react-icons";

export interface InterestCategory {
  id: string;
  title: string;
  icon: IconType;
  items: string[];
}

export const interests: InterestCategory[] = [
  {
    id: "listening",
    title: "Listening_",
    icon: PiVinylRecordBold,
    items: [
      "The Strokes",
      "Baby Keem",
      "Rage Against The Machine",
      "SZA"
    ],
  },
  {
    id: "gaming",
    title: "Playing_",
    icon: PiGameControllerBold,
    items: [
      "Risk of Rain 2",
      "Wuthering Waves",
      "Roboquest",
      "Slay the Spire 2"
    ],
  },
  {
    id: "nerding-out",
    title: "Nerding Out_",
    icon: TbMoodNerd,
    items: [
      "Geography",
      "Gundam",
      "Sociology",
      "Interior Design",
    ],
  },
];