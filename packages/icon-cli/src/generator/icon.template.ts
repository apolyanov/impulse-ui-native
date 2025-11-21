import { TemplateProps } from "./svg-parser.types";
import { template } from "./svg.parser";

export const IconTemplate = (props: TemplateProps) => {
  return template`
    ${props.imports + "\n\n"}
    
    export const ${props.componentName}Icon = memo(function ${props.componentName}(props: SvgProps) {
        return ${props.jsx}
    })
    `;
};
