import { template } from "./svg.parser";

export function IconWrapperTemplate(name: string) {
  return template`
        import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ${name}BoldIcon } from "../bold";
        import { ${name}DuotoneIcon } from "../duotone";
        import { ${name}FillIcon } from "../fill";
        import { ${name}LightIcon } from "../light";
        import { ${name}RegularIcon } from "../regular";
        import { ${name}ThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";

        export const ${name}Icon = memo(function ${name}(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ${name}BoldIcon,
            duotone: ${name}DuotoneIcon,
            fill: ${name}FillIcon,
            light: ${name}LightIcon,
            regular: ${name}RegularIcon,
            thin: ${name}ThinIcon,
            };

            return icons[props.variant ?? "regular"];
        }, [props.variant]);

        return <Icon {...props} />;
        });
`;
}
