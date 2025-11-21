import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowElbowUpRightBoldIcon } from "../bold";
        import { ArrowElbowUpRightDuotoneIcon } from "../duotone";
        import { ArrowElbowUpRightFillIcon } from "../fill";
        import { ArrowElbowUpRightLightIcon } from "../light";
        import { ArrowElbowUpRightRegularIcon } from "../regular";
        import { ArrowElbowUpRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowElbowUpRightIcon = memo(function ArrowElbowUpRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowElbowUpRightBoldIcon,
            duotone: ArrowElbowUpRightDuotoneIcon,
            fill: ArrowElbowUpRightFillIcon,
            light: ArrowElbowUpRightLightIcon,
            regular: ArrowElbowUpRightRegularIcon,
            thin: ArrowElbowUpRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
