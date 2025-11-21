import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EyedropperBoldIcon } from "../bold";
        import { EyedropperDuotoneIcon } from "../duotone";
        import { EyedropperFillIcon } from "../fill";
        import { EyedropperLightIcon } from "../light";
        import { EyedropperRegularIcon } from "../regular";
        import { EyedropperThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EyedropperIcon = memo(function Eyedropper(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EyedropperBoldIcon,
            duotone: EyedropperDuotoneIcon,
            fill: EyedropperFillIcon,
            light: EyedropperLightIcon,
            regular: EyedropperRegularIcon,
            thin: EyedropperThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
