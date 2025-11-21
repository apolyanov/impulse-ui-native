import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DiceSixBoldIcon } from "../bold";
        import { DiceSixDuotoneIcon } from "../duotone";
        import { DiceSixFillIcon } from "../fill";
        import { DiceSixLightIcon } from "../light";
        import { DiceSixRegularIcon } from "../regular";
        import { DiceSixThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DiceSixIcon = memo(function DiceSix(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DiceSixBoldIcon,
            duotone: DiceSixDuotoneIcon,
            fill: DiceSixFillIcon,
            light: DiceSixLightIcon,
            regular: DiceSixRegularIcon,
            thin: DiceSixThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
