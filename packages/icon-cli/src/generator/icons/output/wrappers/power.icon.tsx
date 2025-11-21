import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PowerBoldIcon } from "../bold";
        import { PowerDuotoneIcon } from "../duotone";
        import { PowerFillIcon } from "../fill";
        import { PowerLightIcon } from "../light";
        import { PowerRegularIcon } from "../regular";
        import { PowerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PowerIcon = memo(function Power(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PowerBoldIcon,
            duotone: PowerDuotoneIcon,
            fill: PowerFillIcon,
            light: PowerLightIcon,
            regular: PowerRegularIcon,
            thin: PowerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
