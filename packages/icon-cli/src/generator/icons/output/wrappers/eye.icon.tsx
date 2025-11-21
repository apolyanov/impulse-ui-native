import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EyeBoldIcon } from "../bold";
        import { EyeDuotoneIcon } from "../duotone";
        import { EyeFillIcon } from "../fill";
        import { EyeLightIcon } from "../light";
        import { EyeRegularIcon } from "../regular";
        import { EyeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EyeIcon = memo(function Eye(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EyeBoldIcon,
            duotone: EyeDuotoneIcon,
            fill: EyeFillIcon,
            light: EyeLightIcon,
            regular: EyeRegularIcon,
            thin: EyeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
