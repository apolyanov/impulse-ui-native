import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HighDefinitionBoldIcon } from "../bold";
        import { HighDefinitionDuotoneIcon } from "../duotone";
        import { HighDefinitionFillIcon } from "../fill";
        import { HighDefinitionLightIcon } from "../light";
        import { HighDefinitionRegularIcon } from "../regular";
        import { HighDefinitionThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HighDefinitionIcon = memo(function HighDefinition(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HighDefinitionBoldIcon,
            duotone: HighDefinitionDuotoneIcon,
            fill: HighDefinitionFillIcon,
            light: HighDefinitionLightIcon,
            regular: HighDefinitionRegularIcon,
            thin: HighDefinitionThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
