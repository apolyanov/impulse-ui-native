import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LineSegmentsBoldIcon } from "../bold";
        import { LineSegmentsDuotoneIcon } from "../duotone";
        import { LineSegmentsFillIcon } from "../fill";
        import { LineSegmentsLightIcon } from "../light";
        import { LineSegmentsRegularIcon } from "../regular";
        import { LineSegmentsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LineSegmentsIcon = memo(function LineSegments(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LineSegmentsBoldIcon,
            duotone: LineSegmentsDuotoneIcon,
            fill: LineSegmentsFillIcon,
            light: LineSegmentsLightIcon,
            regular: LineSegmentsRegularIcon,
            thin: LineSegmentsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
