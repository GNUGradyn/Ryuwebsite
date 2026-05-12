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
  GoHeart,
  GoServer
} from "react-icons/go";

import {
  SiDotnet,
  SiForgejo,
  SiGhost,
  SiCodeberg
} from "react-icons/si";

import { 
  FaDiscord, 
  FaGithub,
  FaGitlab,
  FaReddit, 
  FaBluesky,
  FaCode,
  FaLinux,
  FaWindows
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  book: PiBookBookmarkDuotone,
  codeberg: SiCodeberg,
  openLink: HiOutlineLink,
  download: HiDownload,
  home: PiHouseDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  tux: FaLinux,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  gitlab: FaGitlab,
  server: GoServer,
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
  windows: FaWindows
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
