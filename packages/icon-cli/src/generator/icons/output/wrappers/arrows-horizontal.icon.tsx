import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowsHorizontalBoldIcon } from "../bold";
        import { ArrowsHorizontalDuotoneIcon } from "../duotone";
        import { ArrowsHorizontalFillIcon } from "../fill";
        import { ArrowsHorizontalLightIcon } from "../light";
        import { ArrowsHorizontalRegularIcon } from "../regular";
        import { ArrowsHorizontalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowsHorizontalIcon = memo(function ArrowsHorizontal(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowsHorizontalBoldIcon,
            duotone: ArrowsHorizontalDuotoneIcon,
            fill: ArrowsHorizontalFillIcon,
            light: ArrowsHorizontalLightIcon,
            regular: ArrowsHorizontalRegularIcon,
            thin: ArrowsHorizontalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
