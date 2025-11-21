import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowCircleUpRightBoldIcon } from "../bold";
        import { ArrowCircleUpRightDuotoneIcon } from "../duotone";
        import { ArrowCircleUpRightFillIcon } from "../fill";
        import { ArrowCircleUpRightLightIcon } from "../light";
        import { ArrowCircleUpRightRegularIcon } from "../regular";
        import { ArrowCircleUpRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowCircleUpRightIcon = memo(function ArrowCircleUpRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowCircleUpRightBoldIcon,
            duotone: ArrowCircleUpRightDuotoneIcon,
            fill: ArrowCircleUpRightFillIcon,
            light: ArrowCircleUpRightLightIcon,
            regular: ArrowCircleUpRightRegularIcon,
            thin: ArrowCircleUpRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
