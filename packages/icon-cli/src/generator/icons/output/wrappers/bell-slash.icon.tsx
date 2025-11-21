import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BellSlashBoldIcon } from "../bold";
        import { BellSlashDuotoneIcon } from "../duotone";
        import { BellSlashFillIcon } from "../fill";
        import { BellSlashLightIcon } from "../light";
        import { BellSlashRegularIcon } from "../regular";
        import { BellSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BellSlashIcon = memo(function BellSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BellSlashBoldIcon,
            duotone: BellSlashDuotoneIcon,
            fill: BellSlashFillIcon,
            light: BellSlashLightIcon,
            regular: BellSlashRegularIcon,
            thin: BellSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
