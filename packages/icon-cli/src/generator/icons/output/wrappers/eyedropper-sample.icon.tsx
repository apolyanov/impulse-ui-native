import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EyedropperSampleBoldIcon } from "../bold";
        import { EyedropperSampleDuotoneIcon } from "../duotone";
        import { EyedropperSampleFillIcon } from "../fill";
        import { EyedropperSampleLightIcon } from "../light";
        import { EyedropperSampleRegularIcon } from "../regular";
        import { EyedropperSampleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EyedropperSampleIcon = memo(function EyedropperSample(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EyedropperSampleBoldIcon,
            duotone: EyedropperSampleDuotoneIcon,
            fill: EyedropperSampleFillIcon,
            light: EyedropperSampleLightIcon,
            regular: EyedropperSampleRegularIcon,
            thin: EyedropperSampleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
