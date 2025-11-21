import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowsInLineHorizontalBoldIcon } from "../bold";
        import { ArrowsInLineHorizontalDuotoneIcon } from "../duotone";
        import { ArrowsInLineHorizontalFillIcon } from "../fill";
        import { ArrowsInLineHorizontalLightIcon } from "../light";
        import { ArrowsInLineHorizontalRegularIcon } from "../regular";
        import { ArrowsInLineHorizontalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowsInLineHorizontalIcon = memo(function ArrowsInLineHorizontal(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowsInLineHorizontalBoldIcon,
            duotone: ArrowsInLineHorizontalDuotoneIcon,
            fill: ArrowsInLineHorizontalFillIcon,
            light: ArrowsInLineHorizontalLightIcon,
            regular: ArrowsInLineHorizontalRegularIcon,
            thin: ArrowsInLineHorizontalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
