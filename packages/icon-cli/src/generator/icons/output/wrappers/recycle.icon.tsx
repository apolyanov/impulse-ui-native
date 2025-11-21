import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { RecycleBoldIcon } from "../bold";
        import { RecycleDuotoneIcon } from "../duotone";
        import { RecycleFillIcon } from "../fill";
        import { RecycleLightIcon } from "../light";
        import { RecycleRegularIcon } from "../regular";
        import { RecycleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const RecycleIcon = memo(function Recycle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: RecycleBoldIcon,
            duotone: RecycleDuotoneIcon,
            fill: RecycleFillIcon,
            light: RecycleLightIcon,
            regular: RecycleRegularIcon,
            thin: RecycleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
