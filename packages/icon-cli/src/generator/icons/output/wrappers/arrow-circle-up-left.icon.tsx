import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowCircleUpLeftBoldIcon } from "../bold";
        import { ArrowCircleUpLeftDuotoneIcon } from "../duotone";
        import { ArrowCircleUpLeftFillIcon } from "../fill";
        import { ArrowCircleUpLeftLightIcon } from "../light";
        import { ArrowCircleUpLeftRegularIcon } from "../regular";
        import { ArrowCircleUpLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowCircleUpLeftIcon = memo(function ArrowCircleUpLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowCircleUpLeftBoldIcon,
            duotone: ArrowCircleUpLeftDuotoneIcon,
            fill: ArrowCircleUpLeftFillIcon,
            light: ArrowCircleUpLeftLightIcon,
            regular: ArrowCircleUpLeftRegularIcon,
            thin: ArrowCircleUpLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
