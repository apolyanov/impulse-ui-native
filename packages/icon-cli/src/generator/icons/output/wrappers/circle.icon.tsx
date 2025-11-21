import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CircleBoldIcon } from "../bold";
        import { CircleDuotoneIcon } from "../duotone";
        import { CircleFillIcon } from "../fill";
        import { CircleLightIcon } from "../light";
        import { CircleRegularIcon } from "../regular";
        import { CircleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CircleIcon = memo(function Circle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CircleBoldIcon,
            duotone: CircleDuotoneIcon,
            fill: CircleFillIcon,
            light: CircleLightIcon,
            regular: CircleRegularIcon,
            thin: CircleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
