import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DesktopTowerBoldIcon } from "../bold";
        import { DesktopTowerDuotoneIcon } from "../duotone";
        import { DesktopTowerFillIcon } from "../fill";
        import { DesktopTowerLightIcon } from "../light";
        import { DesktopTowerRegularIcon } from "../regular";
        import { DesktopTowerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DesktopTowerIcon = memo(function DesktopTower(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DesktopTowerBoldIcon,
            duotone: DesktopTowerDuotoneIcon,
            fill: DesktopTowerFillIcon,
            light: DesktopTowerLightIcon,
            regular: DesktopTowerRegularIcon,
            thin: DesktopTowerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
