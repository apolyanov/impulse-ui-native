import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CloudSlashBoldIcon } from "../bold";
        import { CloudSlashDuotoneIcon } from "../duotone";
        import { CloudSlashFillIcon } from "../fill";
        import { CloudSlashLightIcon } from "../light";
        import { CloudSlashRegularIcon } from "../regular";
        import { CloudSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CloudSlashIcon = memo(function CloudSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CloudSlashBoldIcon,
            duotone: CloudSlashDuotoneIcon,
            fill: CloudSlashFillIcon,
            light: CloudSlashLightIcon,
            regular: CloudSlashRegularIcon,
            thin: CloudSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
