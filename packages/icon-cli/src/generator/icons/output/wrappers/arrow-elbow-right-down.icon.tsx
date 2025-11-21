import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowElbowRightDownBoldIcon } from "../bold";
        import { ArrowElbowRightDownDuotoneIcon } from "../duotone";
        import { ArrowElbowRightDownFillIcon } from "../fill";
        import { ArrowElbowRightDownLightIcon } from "../light";
        import { ArrowElbowRightDownRegularIcon } from "../regular";
        import { ArrowElbowRightDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowElbowRightDownIcon = memo(function ArrowElbowRightDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowElbowRightDownBoldIcon,
            duotone: ArrowElbowRightDownDuotoneIcon,
            fill: ArrowElbowRightDownFillIcon,
            light: ArrowElbowRightDownLightIcon,
            regular: ArrowElbowRightDownRegularIcon,
            thin: ArrowElbowRightDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
