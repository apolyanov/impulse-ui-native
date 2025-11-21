import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PhoneIncomingBoldIcon } from "../bold";
        import { PhoneIncomingDuotoneIcon } from "../duotone";
        import { PhoneIncomingFillIcon } from "../fill";
        import { PhoneIncomingLightIcon } from "../light";
        import { PhoneIncomingRegularIcon } from "../regular";
        import { PhoneIncomingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PhoneIncomingIcon = memo(function PhoneIncoming(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PhoneIncomingBoldIcon,
            duotone: PhoneIncomingDuotoneIcon,
            fill: PhoneIncomingFillIcon,
            light: PhoneIncomingLightIcon,
            regular: PhoneIncomingRegularIcon,
            thin: PhoneIncomingThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
