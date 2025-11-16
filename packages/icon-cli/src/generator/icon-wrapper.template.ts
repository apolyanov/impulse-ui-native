import { template } from "./svg.parser";

export function IconWrapperTemplate(name: string) {
  return template`
        import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ${name}Bold } from "../bold";
        import { ${name}Duotone } from "../duotone";
        import { ${name}Fill } from "../fill";
        import { ${name}Light } from "../light";
        import { ${name}Regular } from "../regular";
        import { ${name}Thin } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";

        export const ${name} = memo(function ${name}(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ${name}Bold,
            duotone: ${name}Duotone,
            fill: ${name}Fill,
            light: ${name}Light,
            regular: ${name}Regular,
            thin: ${name}Thin,
            };

            return icons[props.variant ?? "regular"];
        }, [props.variant]);

        return <Icon {...props} />;
        });
`;
}
