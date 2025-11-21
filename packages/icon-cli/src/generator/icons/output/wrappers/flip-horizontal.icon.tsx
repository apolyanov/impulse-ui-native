import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FlipHorizontalBoldIcon } from "../bold";
        import { FlipHorizontalDuotoneIcon } from "../duotone";
        import { FlipHorizontalFillIcon } from "../fill";
        import { FlipHorizontalLightIcon } from "../light";
        import { FlipHorizontalRegularIcon } from "../regular";
        import { FlipHorizontalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FlipHorizontalIcon = memo(function FlipHorizontal(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FlipHorizontalBoldIcon,
            duotone: FlipHorizontalDuotoneIcon,
            fill: FlipHorizontalFillIcon,
            light: FlipHorizontalLightIcon,
            regular: FlipHorizontalRegularIcon,
            thin: FlipHorizontalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
