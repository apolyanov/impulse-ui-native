import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PushPinSimpleSlashBoldIcon } from "../bold";
        import { PushPinSimpleSlashDuotoneIcon } from "../duotone";
        import { PushPinSimpleSlashFillIcon } from "../fill";
        import { PushPinSimpleSlashLightIcon } from "../light";
        import { PushPinSimpleSlashRegularIcon } from "../regular";
        import { PushPinSimpleSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PushPinSimpleSlashIcon = memo(function PushPinSimpleSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PushPinSimpleSlashBoldIcon,
            duotone: PushPinSimpleSlashDuotoneIcon,
            fill: PushPinSimpleSlashFillIcon,
            light: PushPinSimpleSlashLightIcon,
            regular: PushPinSimpleSlashRegularIcon,
            thin: PushPinSimpleSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
