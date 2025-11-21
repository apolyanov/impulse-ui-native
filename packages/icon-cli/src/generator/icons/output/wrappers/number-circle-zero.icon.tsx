import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NumberCircleZeroBoldIcon } from "../bold";
        import { NumberCircleZeroDuotoneIcon } from "../duotone";
        import { NumberCircleZeroFillIcon } from "../fill";
        import { NumberCircleZeroLightIcon } from "../light";
        import { NumberCircleZeroRegularIcon } from "../regular";
        import { NumberCircleZeroThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NumberCircleZeroIcon = memo(function NumberCircleZero(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NumberCircleZeroBoldIcon,
            duotone: NumberCircleZeroDuotoneIcon,
            fill: NumberCircleZeroFillIcon,
            light: NumberCircleZeroLightIcon,
            regular: NumberCircleZeroRegularIcon,
            thin: NumberCircleZeroThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
