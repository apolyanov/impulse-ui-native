import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ThermometerHotBoldIcon } from "../bold";
        import { ThermometerHotDuotoneIcon } from "../duotone";
        import { ThermometerHotFillIcon } from "../fill";
        import { ThermometerHotLightIcon } from "../light";
        import { ThermometerHotRegularIcon } from "../regular";
        import { ThermometerHotThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ThermometerHotIcon = memo(function ThermometerHot(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ThermometerHotBoldIcon,
            duotone: ThermometerHotDuotoneIcon,
            fill: ThermometerHotFillIcon,
            light: ThermometerHotLightIcon,
            regular: ThermometerHotRegularIcon,
            thin: ThermometerHotThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
