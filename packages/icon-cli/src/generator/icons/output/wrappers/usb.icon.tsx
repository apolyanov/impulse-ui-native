import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UsbBoldIcon } from "../bold";
        import { UsbDuotoneIcon } from "../duotone";
        import { UsbFillIcon } from "../fill";
        import { UsbLightIcon } from "../light";
        import { UsbRegularIcon } from "../regular";
        import { UsbThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UsbIcon = memo(function Usb(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UsbBoldIcon,
            duotone: UsbDuotoneIcon,
            fill: UsbFillIcon,
            light: UsbLightIcon,
            regular: UsbRegularIcon,
            thin: UsbThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
