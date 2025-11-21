import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AppWindowBoldIcon } from "../bold";
        import { AppWindowDuotoneIcon } from "../duotone";
        import { AppWindowFillIcon } from "../fill";
        import { AppWindowLightIcon } from "../light";
        import { AppWindowRegularIcon } from "../regular";
        import { AppWindowThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AppWindowIcon = memo(function AppWindow(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AppWindowBoldIcon,
            duotone: AppWindowDuotoneIcon,
            fill: AppWindowFillIcon,
            light: AppWindowLightIcon,
            regular: AppWindowRegularIcon,
            thin: AppWindowThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
