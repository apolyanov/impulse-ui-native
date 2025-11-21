import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextHSixBoldIcon } from "../bold";
        import { TextHSixDuotoneIcon } from "../duotone";
        import { TextHSixFillIcon } from "../fill";
        import { TextHSixLightIcon } from "../light";
        import { TextHSixRegularIcon } from "../regular";
        import { TextHSixThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextHSixIcon = memo(function TextHSix(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextHSixBoldIcon,
            duotone: TextHSixDuotoneIcon,
            fill: TextHSixFillIcon,
            light: TextHSixLightIcon,
            regular: TextHSixRegularIcon,
            thin: TextHSixThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
