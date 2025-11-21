import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SwatchesBoldIcon } from "../bold";
        import { SwatchesDuotoneIcon } from "../duotone";
        import { SwatchesFillIcon } from "../fill";
        import { SwatchesLightIcon } from "../light";
        import { SwatchesRegularIcon } from "../regular";
        import { SwatchesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SwatchesIcon = memo(function Swatches(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SwatchesBoldIcon,
            duotone: SwatchesDuotoneIcon,
            fill: SwatchesFillIcon,
            light: SwatchesLightIcon,
            regular: SwatchesRegularIcon,
            thin: SwatchesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
