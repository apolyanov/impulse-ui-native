import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GasCanBoldIcon } from "../bold";
        import { GasCanDuotoneIcon } from "../duotone";
        import { GasCanFillIcon } from "../fill";
        import { GasCanLightIcon } from "../light";
        import { GasCanRegularIcon } from "../regular";
        import { GasCanThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GasCanIcon = memo(function GasCan(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GasCanBoldIcon,
            duotone: GasCanDuotoneIcon,
            fill: GasCanFillIcon,
            light: GasCanLightIcon,
            regular: GasCanRegularIcon,
            thin: GasCanThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
