import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PencilSimpleSlashBoldIcon } from "../bold";
        import { PencilSimpleSlashDuotoneIcon } from "../duotone";
        import { PencilSimpleSlashFillIcon } from "../fill";
        import { PencilSimpleSlashLightIcon } from "../light";
        import { PencilSimpleSlashRegularIcon } from "../regular";
        import { PencilSimpleSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PencilSimpleSlashIcon = memo(function PencilSimpleSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PencilSimpleSlashBoldIcon,
            duotone: PencilSimpleSlashDuotoneIcon,
            fill: PencilSimpleSlashFillIcon,
            light: PencilSimpleSlashLightIcon,
            regular: PencilSimpleSlashRegularIcon,
            thin: PencilSimpleSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
