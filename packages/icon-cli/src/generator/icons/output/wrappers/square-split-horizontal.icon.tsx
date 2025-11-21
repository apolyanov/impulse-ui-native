import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SquareSplitHorizontalBoldIcon } from "../bold";
        import { SquareSplitHorizontalDuotoneIcon } from "../duotone";
        import { SquareSplitHorizontalFillIcon } from "../fill";
        import { SquareSplitHorizontalLightIcon } from "../light";
        import { SquareSplitHorizontalRegularIcon } from "../regular";
        import { SquareSplitHorizontalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SquareSplitHorizontalIcon = memo(function SquareSplitHorizontal(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SquareSplitHorizontalBoldIcon,
            duotone: SquareSplitHorizontalDuotoneIcon,
            fill: SquareSplitHorizontalFillIcon,
            light: SquareSplitHorizontalLightIcon,
            regular: SquareSplitHorizontalRegularIcon,
            thin: SquareSplitHorizontalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
