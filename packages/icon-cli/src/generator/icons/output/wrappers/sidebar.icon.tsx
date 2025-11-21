import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SidebarBoldIcon } from "../bold";
        import { SidebarDuotoneIcon } from "../duotone";
        import { SidebarFillIcon } from "../fill";
        import { SidebarLightIcon } from "../light";
        import { SidebarRegularIcon } from "../regular";
        import { SidebarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SidebarIcon = memo(function Sidebar(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SidebarBoldIcon,
            duotone: SidebarDuotoneIcon,
            fill: SidebarFillIcon,
            light: SidebarLightIcon,
            regular: SidebarRegularIcon,
            thin: SidebarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
