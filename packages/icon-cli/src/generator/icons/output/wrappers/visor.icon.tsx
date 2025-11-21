import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { VisorBoldIcon } from "../bold";
        import { VisorDuotoneIcon } from "../duotone";
        import { VisorFillIcon } from "../fill";
        import { VisorLightIcon } from "../light";
        import { VisorRegularIcon } from "../regular";
        import { VisorThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const VisorIcon = memo(function Visor(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: VisorBoldIcon,
            duotone: VisorDuotoneIcon,
            fill: VisorFillIcon,
            light: VisorLightIcon,
            regular: VisorRegularIcon,
            thin: VisorThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
