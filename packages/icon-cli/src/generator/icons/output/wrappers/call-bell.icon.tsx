import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CallBellBoldIcon } from "../bold";
        import { CallBellDuotoneIcon } from "../duotone";
        import { CallBellFillIcon } from "../fill";
        import { CallBellLightIcon } from "../light";
        import { CallBellRegularIcon } from "../regular";
        import { CallBellThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CallBellIcon = memo(function CallBell(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CallBellBoldIcon,
            duotone: CallBellDuotoneIcon,
            fill: CallBellFillIcon,
            light: CallBellLightIcon,
            regular: CallBellRegularIcon,
            thin: CallBellThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
