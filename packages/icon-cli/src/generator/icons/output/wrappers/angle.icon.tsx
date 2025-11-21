import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AngleBoldIcon } from "../bold";
        import { AngleDuotoneIcon } from "../duotone";
        import { AngleFillIcon } from "../fill";
        import { AngleLightIcon } from "../light";
        import { AngleRegularIcon } from "../regular";
        import { AngleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AngleIcon = memo(function Angle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AngleBoldIcon,
            duotone: AngleDuotoneIcon,
            fill: AngleFillIcon,
            light: AngleLightIcon,
            regular: AngleRegularIcon,
            thin: AngleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
