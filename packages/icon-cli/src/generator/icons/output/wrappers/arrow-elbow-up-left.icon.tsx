import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowElbowUpLeftBoldIcon } from "../bold";
        import { ArrowElbowUpLeftDuotoneIcon } from "../duotone";
        import { ArrowElbowUpLeftFillIcon } from "../fill";
        import { ArrowElbowUpLeftLightIcon } from "../light";
        import { ArrowElbowUpLeftRegularIcon } from "../regular";
        import { ArrowElbowUpLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowElbowUpLeftIcon = memo(function ArrowElbowUpLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowElbowUpLeftBoldIcon,
            duotone: ArrowElbowUpLeftDuotoneIcon,
            fill: ArrowElbowUpLeftFillIcon,
            light: ArrowElbowUpLeftLightIcon,
            regular: ArrowElbowUpLeftRegularIcon,
            thin: ArrowElbowUpLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
