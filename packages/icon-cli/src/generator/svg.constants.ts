/**
 * A Set of all valid SVG element names.
 * You can use it to check: SVG_ELEMENTS.has(node.nodeName)
 */
export const SvgElements = new Set([
  // Basic structure
  "svg",
  "g",
  "defs",
  "symbol",
  "use",
  "view",
  "clipPath",
  "mask",
  "pattern",
  "metadata",
  "desc",
  "title",
  "style",
  "switch",
  "foreignObject",

  // Shapes
  "path",
  "rect",
  "circle",
  "ellipse",
  "line",
  "polyline",
  "polygon",

  // Gradients and colors
  "linearGradient",
  "radialGradient",
  "stop",

  // Filters
  "filter",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",

  // Text
  "text",
  "tspan",
  "textPath",

  // Animation
  "animate",
  "animateMotion",
  "animateTransform",
  "mpath",

  // Misc
  "marker",
  "cursor",
  "gradient",
]);

/**
 * Maps lowercase SVG element names to their React Native SVG component names.
 * For example: 'clipPath' → 'ClipPath'
 */
export const SvgToRNSvg: Record<string, string> = {
  // Structural elements
  svg: "Svg",
  g: "G",
  defs: "Defs",
  symbol: "Symbol",
  use: "Use",
  clipPath: "ClipPath",
  mask: "Mask",
  pattern: "Pattern",
  marker: "Marker",
  foreignObject: "ForeignObject",
  linearGradient: "LinearGradient",
  radialGradient: "RadialGradient",
  stop: "Stop",
  view: "View",
  metadata: "Metadata",
  desc: "Desc",
  title: "Title",

  // Basic shapes
  path: "Path",
  rect: "Rect",
  circle: "Circle",
  ellipse: "Ellipse",
  line: "Line",
  polyline: "Polyline",
  polygon: "Polygon",

  // Text elements
  text: "Text",
  tspan: "TSpan",
  textPath: "TextPath",

  // Animation (React Native SVG supports these partially)
  animate: "Animate",
  animateMotion: "AnimateMotion",
  animateTransform: "AnimateTransform",
  mpath: "MPath",

  // Filter primitives
  filter: "Filter",
  feBlend: "FeBlend",
  feColorMatrix: "FeColorMatrix",
  feComponentTransfer: "FeComponentTransfer",
  feComposite: "FeComposite",
  feConvolveMatrix: "FeConvolveMatrix",
  feDiffuseLighting: "FeDiffuseLighting",
  feDisplacementMap: "FeDisplacementMap",
  feDistantLight: "FeDistantLight",
  feFlood: "FeFlood",
  feFuncA: "FeFuncA",
  feFuncB: "FeFuncB",
  feFuncG: "FeFuncG",
  feFuncR: "FeFuncR",
  feGaussianBlur: "FeGaussianBlur",
  feImage: "FeImage",
  feMerge: "FeMerge",
  feMergeNode: "FeMergeNode",
  feMorphology: "FeMorphology",
  feOffset: "FeOffset",
  fePointLight: "FePointLight",
  feSpecularLighting: "FeSpecularLighting",
  feSpotLight: "FeSpotLight",
  feTile: "FeTile",
  feTurbulence: "FeTurbulence",

  // Gradients & paint servers
  gradient: "Gradient",

  // Misc
  style: "Style",
  switch: "Switch",
};
