import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PhoneDisconnectBoldIcon } from "../bold";
        import { PhoneDisconnectDuotoneIcon } from "../duotone";
        import { PhoneDisconnectFillIcon } from "../fill";
        import { PhoneDisconnectLightIcon } from "../light";
        import { PhoneDisconnectRegularIcon } from "../regular";
        import { PhoneDisconnectThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PhoneDisconnectIcon = memo(function PhoneDisconnect(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PhoneDisconnectBoldIcon,
            duotone: PhoneDisconnectDuotoneIcon,
            fill: PhoneDisconnectFillIcon,
            light: PhoneDisconnectLightIcon,
            regular: PhoneDisconnectRegularIcon,
            thin: PhoneDisconnectThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
