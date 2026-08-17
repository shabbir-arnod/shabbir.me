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

export type ToolIcon =
  | { kind: "glyph"; Icon: IconType; color: string }
  | { kind: "image"; src: string };

export const toolIcons: Record<string, ToolIcon> = {
  AWS: { kind: "glyph", Icon: FaAws, color: "#FF9900" },
  Azure: { kind: "glyph", Icon: TbBrandAzure, color: "#0078D4" },
  "Apache Kafka": { kind: "glyph", Icon: SiApachekafka, color: "#ECECEC" },
  RabbitMQ: { kind: "glyph", Icon: SiRabbitmq, color: "#FF6600" },
  Python: { kind: "glyph", Icon: SiPython, color: "#4B8BBE" },
  JSON: { kind: "glyph", Icon: SiJson, color: "#ECECEC" },
  XML: { kind: "image", src: "/icons/xml.png" },
  SQL: { kind: "image", src: "/icons/sql.png" },
  Grafana: { kind: "glyph", Icon: SiGrafana, color: "#F46800" },
  "Power BI": { kind: "image", src: "/icons/powerbi.png" },
  Splunk: { kind: "glyph", Icon: SiSplunk, color: "#ECECEC" },
  JIRA: { kind: "glyph", Icon: SiJira, color: "#2684FF" },
  Confluence: { kind: "glyph", Icon: SiConfluence, color: "#2684FF" },
  Miro: { kind: "glyph", Icon: SiMiro, color: "#FFD02F" },
  Figma: { kind: "glyph", Icon: SiFigma, color: "#F24E1E" },
};
