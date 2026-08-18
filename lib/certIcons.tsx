import type { IconType } from "react-icons";
import { FaAward, FaAws, FaCertificate } from "react-icons/fa6";

export type CertIcon = { Icon: IconType; color: string };

export const certIcons: Record<string, CertIcon> = {
  "AWS Certified Solutions Architect": { Icon: FaAws, color: "#FF9900" },
  "AWS Certified Cloud Practitioner": { Icon: FaAws, color: "#FF9900" },
  "Professional Scrum Product Owner I": { Icon: FaCertificate, color: "#2EB5A5" },
  "ICAgile Certified Product Owner": { Icon: FaAward, color: "#F5821F" },
};
