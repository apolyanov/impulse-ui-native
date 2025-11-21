import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EyeSlashBoldIcon } from "../bold";
        import { EyeSlashDuotoneIcon } from "../duotone";
        import { EyeSlashFillIcon } from "../fill";
        import { EyeSlashLightIcon } from "../light";
        import { EyeSlashRegularIcon } from "../regular";
        import { EyeSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EyeSlashIcon = memo(function EyeSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EyeSlashBoldIcon,
            duotone: EyeSlashDuotoneIcon,
            fill: EyeSlashFillIcon,
            light: EyeSlashLightIcon,
            regular: EyeSlashRegularIcon,
            thin: EyeSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
