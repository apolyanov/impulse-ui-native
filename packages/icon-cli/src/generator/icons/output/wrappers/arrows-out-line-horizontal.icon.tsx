import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowsOutLineHorizontalBoldIcon } from "../bold";
        import { ArrowsOutLineHorizontalDuotoneIcon } from "../duotone";
        import { ArrowsOutLineHorizontalFillIcon } from "../fill";
        import { ArrowsOutLineHorizontalLightIcon } from "../light";
        import { ArrowsOutLineHorizontalRegularIcon } from "../regular";
        import { ArrowsOutLineHorizontalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowsOutLineHorizontalIcon = memo(function ArrowsOutLineHorizontal(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowsOutLineHorizontalBoldIcon,
            duotone: ArrowsOutLineHorizontalDuotoneIcon,
            fill: ArrowsOutLineHorizontalFillIcon,
            light: ArrowsOutLineHorizontalLightIcon,
            regular: ArrowsOutLineHorizontalRegularIcon,
            thin: ArrowsOutLineHorizontalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
