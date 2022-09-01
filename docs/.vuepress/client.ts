import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import {
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiRocket,
  RiLinkM,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  HiMail,
  FaPaw,
  AiCv,
  AiGoogleScholarSquare
} from "oh-vue-icons/icons";

addIcons(
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiRocket,
  RiLinkM,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  HiMail,
  FaPaw,
  AiCv,
  AiGoogleScholarSquare
);

export default defineClientConfig({});