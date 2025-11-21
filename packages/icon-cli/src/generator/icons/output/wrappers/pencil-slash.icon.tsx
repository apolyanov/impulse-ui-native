import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PencilSlashBoldIcon } from "../bold";
        import { PencilSlashDuotoneIcon } from "../duotone";
        import { PencilSlashFillIcon } from "../fill";
        import { PencilSlashLightIcon } from "../light";
        import { PencilSlashRegularIcon } from "../regular";
        import { PencilSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PencilSlashIcon = memo(function PencilSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PencilSlashBoldIcon,
            duotone: PencilSlashDuotoneIcon,
            fill: PencilSlashFillIcon,
            light: PencilSlashLightIcon,
            regular: PencilSlashRegularIcon,
            thin: PencilSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
