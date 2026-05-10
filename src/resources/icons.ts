import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiDotnet,
  SiKotlin,
  SiForgejo,
  SiCodeberg
} from "react-icons/si";

import { 
  FaDiscord, 
  FaGithub,
  FaGitlab,
  FaLinkedin, 
  FaX,
  FaThreads,
  FaTwitch, 
  FaInstagram, 
  FaXTwitter, 
  FaFacebook, 
  FaPinterest, 
  FaWhatsapp, 
  FaReddit, 
  FaTelegram, 
  FaBluesky
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  gitlab: FaGitlab,
  forgejo: SiForgejo,
  codeberg: SiCodeberg,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  twitch: FaTwitch,
  threads: FaThreads,
  bluesky: FaBluesky,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  dotnet: SiDotnet,
  kotlin: SiKotlin,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
