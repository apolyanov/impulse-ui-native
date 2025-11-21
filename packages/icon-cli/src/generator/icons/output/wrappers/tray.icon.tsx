import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TrayBoldIcon } from "../bold";
        import { TrayDuotoneIcon } from "../duotone";
        import { TrayFillIcon } from "../fill";
        import { TrayLightIcon } from "../light";
        import { TrayRegularIcon } from "../regular";
        import { TrayThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TrayIcon = memo(function Tray(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TrayBoldIcon,
            duotone: TrayDuotoneIcon,
            fill: TrayFillIcon,
            light: TrayLightIcon,
            regular: TrayRegularIcon,
            thin: TrayThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
