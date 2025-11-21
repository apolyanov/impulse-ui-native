import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextTSlashBoldIcon } from "../bold";
        import { TextTSlashDuotoneIcon } from "../duotone";
        import { TextTSlashFillIcon } from "../fill";
        import { TextTSlashLightIcon } from "../light";
        import { TextTSlashRegularIcon } from "../regular";
        import { TextTSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextTSlashIcon = memo(function TextTSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextTSlashBoldIcon,
            duotone: TextTSlashDuotoneIcon,
            fill: TextTSlashFillIcon,
            light: TextTSlashLightIcon,
            regular: TextTSlashRegularIcon,
            thin: TextTSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
