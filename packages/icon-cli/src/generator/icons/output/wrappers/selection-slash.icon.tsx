import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SelectionSlashBoldIcon } from "../bold";
        import { SelectionSlashDuotoneIcon } from "../duotone";
        import { SelectionSlashFillIcon } from "../fill";
        import { SelectionSlashLightIcon } from "../light";
        import { SelectionSlashRegularIcon } from "../regular";
        import { SelectionSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SelectionSlashIcon = memo(function SelectionSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SelectionSlashBoldIcon,
            duotone: SelectionSlashDuotoneIcon,
            fill: SelectionSlashFillIcon,
            light: SelectionSlashLightIcon,
            regular: SelectionSlashRegularIcon,
            thin: SelectionSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
