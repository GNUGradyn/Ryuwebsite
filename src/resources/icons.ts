import { IconType } from "react-icons";

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
  PiBookBookmarkDuotone,
  PiDownload
} from "react-icons/pi";

import {
  SiDotnet,
  SiForgejo,
  SiGhost
} from "react-icons/si";

import { 
  FaDiscord, 
  FaGithub,
  FaXTwitter,
  FaReddit, 
  FaBluesky,
  FaCode
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  download: PiDownload,
  home: PiHouseDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  forgejo: SiForgejo,
  ghost: SiGhost,
  code: FaCode,
  twitter: FaXTwitter,
  bluesky: FaBluesky,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  dotnet: SiDotnet,
  reddit: FaReddit,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
