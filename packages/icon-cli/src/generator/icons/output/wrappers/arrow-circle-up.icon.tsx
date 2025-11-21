import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowCircleUpBoldIcon } from "../bold";
        import { ArrowCircleUpDuotoneIcon } from "../duotone";
        import { ArrowCircleUpFillIcon } from "../fill";
        import { ArrowCircleUpLightIcon } from "../light";
        import { ArrowCircleUpRegularIcon } from "../regular";
        import { ArrowCircleUpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowCircleUpIcon = memo(function ArrowCircleUp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowCircleUpBoldIcon,
            duotone: ArrowCircleUpDuotoneIcon,
            fill: ArrowCircleUpFillIcon,
            light: ArrowCircleUpLightIcon,
            regular: ArrowCircleUpRegularIcon,
            thin: ArrowCircleUpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
