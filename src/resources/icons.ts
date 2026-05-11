import { IconType } from "react-icons";

import {
  HiDownload
} from "react-icons/hi";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineRocketLaunch
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiBookBookmarkDuotone
} from "react-icons/pi";

import {
  GoHeart
} from "react-icons/go";

import {
  SiDotnet,
  SiForgejo,
  SiGhost
} from "react-icons/si";

import { 
  FaDiscord, 
  FaGithub,
  FaReddit, 
  FaBluesky,
  FaCode
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  download: HiDownload,
  home: PiHouseDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  forgejo: SiForgejo,
  ghost: SiGhost,
  code: FaCode,
  heart: GoHeart,
  bluesky: FaBluesky,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  dotnet: SiDotnet,
  reddit: FaReddit,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
