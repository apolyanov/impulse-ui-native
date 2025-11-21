import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { IntersectionBoldIcon } from "../bold";
        import { IntersectionDuotoneIcon } from "../duotone";
        import { IntersectionFillIcon } from "../fill";
        import { IntersectionLightIcon } from "../light";
        import { IntersectionRegularIcon } from "../regular";
        import { IntersectionThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const IntersectionIcon = memo(function Intersection(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: IntersectionBoldIcon,
            duotone: IntersectionDuotoneIcon,
            fill: IntersectionFillIcon,
            light: IntersectionLightIcon,
            regular: IntersectionRegularIcon,
            thin: IntersectionThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
