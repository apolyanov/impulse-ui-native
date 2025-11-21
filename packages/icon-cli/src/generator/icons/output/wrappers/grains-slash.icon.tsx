import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GrainsSlashBoldIcon } from "../bold";
        import { GrainsSlashDuotoneIcon } from "../duotone";
        import { GrainsSlashFillIcon } from "../fill";
        import { GrainsSlashLightIcon } from "../light";
        import { GrainsSlashRegularIcon } from "../regular";
        import { GrainsSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GrainsSlashIcon = memo(function GrainsSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GrainsSlashBoldIcon,
            duotone: GrainsSlashDuotoneIcon,
            fill: GrainsSlashFillIcon,
            light: GrainsSlashLightIcon,
            regular: GrainsSlashRegularIcon,
            thin: GrainsSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
