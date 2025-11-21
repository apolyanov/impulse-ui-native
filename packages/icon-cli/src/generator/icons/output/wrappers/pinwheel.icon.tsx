import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PinwheelBoldIcon } from "../bold";
        import { PinwheelDuotoneIcon } from "../duotone";
        import { PinwheelFillIcon } from "../fill";
        import { PinwheelLightIcon } from "../light";
        import { PinwheelRegularIcon } from "../regular";
        import { PinwheelThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PinwheelIcon = memo(function Pinwheel(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PinwheelBoldIcon,
            duotone: PinwheelDuotoneIcon,
            fill: PinwheelFillIcon,
            light: PinwheelLightIcon,
            regular: PinwheelRegularIcon,
            thin: PinwheelThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
