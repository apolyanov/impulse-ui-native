import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowElbowLeftUpBoldIcon } from "../bold";
        import { ArrowElbowLeftUpDuotoneIcon } from "../duotone";
        import { ArrowElbowLeftUpFillIcon } from "../fill";
        import { ArrowElbowLeftUpLightIcon } from "../light";
        import { ArrowElbowLeftUpRegularIcon } from "../regular";
        import { ArrowElbowLeftUpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowElbowLeftUpIcon = memo(function ArrowElbowLeftUp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowElbowLeftUpBoldIcon,
            duotone: ArrowElbowLeftUpDuotoneIcon,
            fill: ArrowElbowLeftUpFillIcon,
            light: ArrowElbowLeftUpLightIcon,
            regular: ArrowElbowLeftUpRegularIcon,
            thin: ArrowElbowLeftUpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
