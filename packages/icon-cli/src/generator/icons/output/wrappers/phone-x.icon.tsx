import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PhoneXBoldIcon } from "../bold";
        import { PhoneXDuotoneIcon } from "../duotone";
        import { PhoneXFillIcon } from "../fill";
        import { PhoneXLightIcon } from "../light";
        import { PhoneXRegularIcon } from "../regular";
        import { PhoneXThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PhoneXIcon = memo(function PhoneX(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PhoneXBoldIcon,
            duotone: PhoneXDuotoneIcon,
            fill: PhoneXFillIcon,
            light: PhoneXLightIcon,
            regular: PhoneXRegularIcon,
            thin: PhoneXThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
