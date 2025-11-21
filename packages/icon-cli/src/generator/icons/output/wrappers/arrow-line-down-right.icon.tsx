import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowLineDownRightBoldIcon } from "../bold";
        import { ArrowLineDownRightDuotoneIcon } from "../duotone";
        import { ArrowLineDownRightFillIcon } from "../fill";
        import { ArrowLineDownRightLightIcon } from "../light";
        import { ArrowLineDownRightRegularIcon } from "../regular";
        import { ArrowLineDownRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowLineDownRightIcon = memo(function ArrowLineDownRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowLineDownRightBoldIcon,
            duotone: ArrowLineDownRightDuotoneIcon,
            fill: ArrowLineDownRightFillIcon,
            light: ArrowLineDownRightLightIcon,
            regular: ArrowLineDownRightRegularIcon,
            thin: ArrowLineDownRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
