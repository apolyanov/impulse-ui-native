import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ThreeDBoldIcon } from "../bold";
        import { ThreeDDuotoneIcon } from "../duotone";
        import { ThreeDFillIcon } from "../fill";
        import { ThreeDLightIcon } from "../light";
        import { ThreeDRegularIcon } from "../regular";
        import { ThreeDThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ThreeDIcon = memo(function ThreeD(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ThreeDBoldIcon,
            duotone: ThreeDDuotoneIcon,
            fill: ThreeDFillIcon,
            light: ThreeDLightIcon,
            regular: ThreeDRegularIcon,
            thin: ThreeDThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
