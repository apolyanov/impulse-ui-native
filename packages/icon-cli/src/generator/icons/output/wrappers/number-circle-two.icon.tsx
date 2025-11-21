import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NumberCircleTwoBoldIcon } from "../bold";
        import { NumberCircleTwoDuotoneIcon } from "../duotone";
        import { NumberCircleTwoFillIcon } from "../fill";
        import { NumberCircleTwoLightIcon } from "../light";
        import { NumberCircleTwoRegularIcon } from "../regular";
        import { NumberCircleTwoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NumberCircleTwoIcon = memo(function NumberCircleTwo(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NumberCircleTwoBoldIcon,
            duotone: NumberCircleTwoDuotoneIcon,
            fill: NumberCircleTwoFillIcon,
            light: NumberCircleTwoLightIcon,
            regular: NumberCircleTwoRegularIcon,
            thin: NumberCircleTwoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
