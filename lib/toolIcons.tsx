import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { TbBrandAzure } from "react-icons/tb";
import {
  SiApachekafka,
  SiConfluence,
  SiFigma,
  SiGrafana,
  SiJira,
  SiJson,
  SiMiro,
  SiPython,
  SiRabbitmq,
  SiSplunk,
} from "react-icons/si";

export const toolIcons: Record<string, IconType> = {
  AWS: FaAws,
  Azure: TbBrandAzure,
  Kafka: SiApachekafka,
  RabbitMQ: SiRabbitmq,
  Python: SiPython,
  JSON: SiJson,
  Grafana: SiGrafana,
  Splunk: SiSplunk,
  JIRA: SiJira,
  Confluence: SiConfluence,
  Miro: SiMiro,
  Figma: SiFigma,
};
