import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CellTowerBoldIcon } from "../bold";
        import { CellTowerDuotoneIcon } from "../duotone";
        import { CellTowerFillIcon } from "../fill";
        import { CellTowerLightIcon } from "../light";
        import { CellTowerRegularIcon } from "../regular";
        import { CellTowerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CellTowerIcon = memo(function CellTower(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CellTowerBoldIcon,
            duotone: CellTowerDuotoneIcon,
            fill: CellTowerFillIcon,
            light: CellTowerLightIcon,
            regular: CellTowerRegularIcon,
            thin: CellTowerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
