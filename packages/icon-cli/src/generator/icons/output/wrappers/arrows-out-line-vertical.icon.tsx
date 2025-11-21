import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowsOutLineVerticalBoldIcon } from "../bold";
        import { ArrowsOutLineVerticalDuotoneIcon } from "../duotone";
        import { ArrowsOutLineVerticalFillIcon } from "../fill";
        import { ArrowsOutLineVerticalLightIcon } from "../light";
        import { ArrowsOutLineVerticalRegularIcon } from "../regular";
        import { ArrowsOutLineVerticalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowsOutLineVerticalIcon = memo(function ArrowsOutLineVertical(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowsOutLineVerticalBoldIcon,
            duotone: ArrowsOutLineVerticalDuotoneIcon,
            fill: ArrowsOutLineVerticalFillIcon,
            light: ArrowsOutLineVerticalLightIcon,
            regular: ArrowsOutLineVerticalRegularIcon,
            thin: ArrowsOutLineVerticalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
