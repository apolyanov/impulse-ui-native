import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowLineDownBoldIcon } from "../bold";
        import { ArrowLineDownDuotoneIcon } from "../duotone";
        import { ArrowLineDownFillIcon } from "../fill";
        import { ArrowLineDownLightIcon } from "../light";
        import { ArrowLineDownRegularIcon } from "../regular";
        import { ArrowLineDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowLineDownIcon = memo(function ArrowLineDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowLineDownBoldIcon,
            duotone: ArrowLineDownDuotoneIcon,
            fill: ArrowLineDownFillIcon,
            light: ArrowLineDownLightIcon,
            regular: ArrowLineDownRegularIcon,
            thin: ArrowLineDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
