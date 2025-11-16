import { DOMParser } from "@xmldom/xmldom";
import type {
  ParseSvgStringOptions,
  SvgAttributes,
  SvgAttributeValue,
  SvgGenConfig,
  SvgObject,
  TemplateFunction,
} from "./svg-parser.types";
import { SvgElements, SvgToRNSvg } from "./svg.constants";
import rawConfig from "./svg.constants?raw";

const config: SvgGenConfig = JSON.parse(rawConfig);
const parser = new DOMParser();

export function parseSvgString(
  svg: string,
  template: TemplateFunction,
  options: ParseSvgStringOptions
) {
  const parsedSvg = parser.parseFromString(svg, "image/svg+xml");
  const foundElements = new Set<string>();

  const svgObject = walkSvg(parsedSvg.documentElement, foundElements);

  if (svgObject) {
    const compiledImports = getNeededImports(foundElements);
    const compiledJsx = getJsx(svgObject);

    return template({
      componentName: options.componentName,
      imports: compiledImports,
      jsx: compiledJsx,
    });
  }
}

function walkSvg(node: Element, foundElements: Set<string>) {
  if (!SvgElements.has(node.nodeName)) {
    return null;
  }

  foundElements.add(node.nodeName);

  const svgObject: SvgObject = {
    nodeName: node.nodeName,
    attributes: parseNodeAttributes(node.attributes),
    children: [],
  };

  if (node.childNodes) {
    Array.from(node.childNodes).forEach((child) => {
      const childSvgElement = walkSvg(child as Element, foundElements);

      if (childSvgElement) {
        svgObject.children.push(childSvgElement);
      }
    });
  }

  return svgObject;
}

function parseNodeAttributes(rawAttributes: NamedNodeMap) {
  const parsedAttributes: SvgAttributes = {};

  if (!rawAttributes) {
    return parsedAttributes;
  }

  const attributes = Array.from(rawAttributes).filter((attr) => {
    if (typeof config.disallowedAttributes === "undefined") {
      return true;
    }

    return !config.disallowedAttributes.includes(attr.name);
  });

  for (const attr of attributes) {
    const value = getAttributeValue(attr);

    if (value) {
      parsedAttributes[getAttributeKey(attr)] = value;
    }
  }

  return parsedAttributes;
}

function getAttributeValue(attr: Attr): SvgAttributeValue | undefined {
  const originalValue = attr.value;
  const shouldReplace = config.attributeReplacements?.[attr.name];

  if (originalValue === "none") {
    return {
      replaced: false,
      value: "none",
    };
  }

  if (shouldReplace) {
    const value = config.attributeReplacements?.[attr.name];

    if (value) {
      return {
        replaced: true,
        value,
      };
    }

    return undefined;
  }

  // detect numeric-only strings (e.g. "1.5", "100", "-2")
  if (originalValue && /^-?\d*\.?\d+$/.test(originalValue)) {
    return {
      replaced: false,
      value: parseFloat(originalValue),
    };
  }

  return {
    replaced: false,
    value: originalValue,
  };
}

function getAttributeKey(attr: Attr) {
  if (config.camelCaseAttributes) {
    const cleanAttr = attr.name.replace(/^[a-z]+:/, "");

    return cleanAttr.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  }

  return attr.name;
}

function getNeededImports(foundElements: Set<string>) {
  const svgElementsImports = Array.from(foundElements)
    .filter((element) => element !== "svg")
    .map((element) => SvgToRNSvg[element])
    .join(", ");

  const imports = `
    import { memo } from 'react'
    import Svg, { ${svgElementsImports} } from 'react-native-svg'
    import type { SvgProps } from 'react-native-svg' 
  `;

  return imports;
}

function getJsx(svgObject: SvgObject) {
  return `(
    ${buildJsxTag(svgObject)}
  )`;
}

function buildJsxTag(svgObject: SvgObject) {
  let tag = "";

  const attributes = buildJsxTagAttributes(svgObject.attributes);
  const hasChildren = svgObject.children.length > 0;
  const openingTag = `<${SvgToRNSvg[svgObject.nodeName]} ${attributes} ${
    hasChildren ? ">" : ""
  }`;
  const closingTag = hasChildren
    ? `</${SvgToRNSvg[svgObject.nodeName]}>`
    : "/>";

  tag += `${openingTag}`;

  if (hasChildren) {
    svgObject.children.forEach((child) => {
      const childTag = buildJsxTag(child);

      if (childTag.length > 0) {
        tag += childTag;
      }
    });
  }

  tag += closingTag;

  return tag;
}

function buildJsxTagAttributes(attributes: SvgAttributes) {
  let compiledAttributes = "";

  Object.entries(attributes).forEach(([key, svgValue]) => {
    if (svgValue.replaced) {
      compiledAttributes += `${key}=${svgValue.value}\n`;
    } else if (typeof svgValue.value === "string") {
      compiledAttributes += `${key}="${svgValue.value}"\n`;
    } else {
      compiledAttributes += `${key}={${svgValue.value}}\n`;
    }
  });

  return compiledAttributes;
}

export const template = (
  strings: TemplateStringsArray,
  ...values: unknown[]
) => {
  let result = "";

  strings.forEach((str, i) => {
    result += str + (values[i] ?? "");
  });

  result = result
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line) => line.trim().length > 0)
    .join("\n");

  return result.trim() + "\n";
};
