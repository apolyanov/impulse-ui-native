import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ThermometerBoldIcon } from "../bold";
        import { ThermometerDuotoneIcon } from "../duotone";
        import { ThermometerFillIcon } from "../fill";
        import { ThermometerLightIcon } from "../light";
        import { ThermometerRegularIcon } from "../regular";
        import { ThermometerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ThermometerIcon = memo(function Thermometer(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ThermometerBoldIcon,
            duotone: ThermometerDuotoneIcon,
            fill: ThermometerFillIcon,
            light: ThermometerLightIcon,
            regular: ThermometerRegularIcon,
            thin: ThermometerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
