import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowCircleLeftBoldIcon } from "../bold";
        import { ArrowCircleLeftDuotoneIcon } from "../duotone";
        import { ArrowCircleLeftFillIcon } from "../fill";
        import { ArrowCircleLeftLightIcon } from "../light";
        import { ArrowCircleLeftRegularIcon } from "../regular";
        import { ArrowCircleLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowCircleLeftIcon = memo(function ArrowCircleLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowCircleLeftBoldIcon,
            duotone: ArrowCircleLeftDuotoneIcon,
            fill: ArrowCircleLeftFillIcon,
            light: ArrowCircleLeftLightIcon,
            regular: ArrowCircleLeftRegularIcon,
            thin: ArrowCircleLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
