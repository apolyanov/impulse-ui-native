import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EyeClosedBoldIcon } from "../bold";
        import { EyeClosedDuotoneIcon } from "../duotone";
        import { EyeClosedFillIcon } from "../fill";
        import { EyeClosedLightIcon } from "../light";
        import { EyeClosedRegularIcon } from "../regular";
        import { EyeClosedThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EyeClosedIcon = memo(function EyeClosed(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EyeClosedBoldIcon,
            duotone: EyeClosedDuotoneIcon,
            fill: EyeClosedFillIcon,
            light: EyeClosedLightIcon,
            regular: EyeClosedRegularIcon,
            thin: EyeClosedThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
