import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DesktopBoldIcon } from "../bold";
        import { DesktopDuotoneIcon } from "../duotone";
        import { DesktopFillIcon } from "../fill";
        import { DesktopLightIcon } from "../light";
        import { DesktopRegularIcon } from "../regular";
        import { DesktopThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DesktopIcon = memo(function Desktop(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DesktopBoldIcon,
            duotone: DesktopDuotoneIcon,
            fill: DesktopFillIcon,
            light: DesktopLightIcon,
            regular: DesktopRegularIcon,
            thin: DesktopThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
