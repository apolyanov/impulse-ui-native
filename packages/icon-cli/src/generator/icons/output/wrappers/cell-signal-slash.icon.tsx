import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CellSignalSlashBoldIcon } from "../bold";
        import { CellSignalSlashDuotoneIcon } from "../duotone";
        import { CellSignalSlashFillIcon } from "../fill";
        import { CellSignalSlashLightIcon } from "../light";
        import { CellSignalSlashRegularIcon } from "../regular";
        import { CellSignalSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CellSignalSlashIcon = memo(function CellSignalSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CellSignalSlashBoldIcon,
            duotone: CellSignalSlashDuotoneIcon,
            fill: CellSignalSlashFillIcon,
            light: CellSignalSlashLightIcon,
            regular: CellSignalSlashRegularIcon,
            thin: CellSignalSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
