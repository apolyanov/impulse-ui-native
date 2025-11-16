export interface TemplateProps {
  imports: string;
  componentName: string;
  jsx: string;
}

export interface TemplateFunction {
  (props: TemplateProps): string;
}

export interface ParseSvgStringOptions {
  componentName: string;
}

export interface SvgAttributeValue {
  value: string | number;
  replaced?: boolean;
}

export interface SvgAttributes {
  [key: string]: SvgAttributeValue;
}

export interface SvgObject {
  nodeName: string;
  attributes: SvgAttributes;
  children: SvgObject[];
}

export type SvgGenRuntime = "react" | "react-native";

export interface SvgGenConfig {
  runtime: SvgGenRuntime;
  outputDir: string;
  attributeReplacements?: Record<string, string>;
  disallowedAttributes?: string[];
  camelCaseAttributes?: boolean;
  fileNameCase?: "pascal" | "kebab";
}
