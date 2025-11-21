import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UnionBoldIcon } from "../bold";
        import { UnionDuotoneIcon } from "../duotone";
        import { UnionFillIcon } from "../fill";
        import { UnionLightIcon } from "../light";
        import { UnionRegularIcon } from "../regular";
        import { UnionThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UnionIcon = memo(function Union(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UnionBoldIcon,
            duotone: UnionDuotoneIcon,
            fill: UnionFillIcon,
            light: UnionLightIcon,
            regular: UnionRegularIcon,
            thin: UnionThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
