import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EmptyBoldIcon } from "../bold";
        import { EmptyDuotoneIcon } from "../duotone";
        import { EmptyFillIcon } from "../fill";
        import { EmptyLightIcon } from "../light";
        import { EmptyRegularIcon } from "../regular";
        import { EmptyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EmptyIcon = memo(function Empty(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EmptyBoldIcon,
            duotone: EmptyDuotoneIcon,
            fill: EmptyFillIcon,
            light: EmptyLightIcon,
            regular: EmptyRegularIcon,
            thin: EmptyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
