import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FlowArrowBoldIcon } from "../bold";
        import { FlowArrowDuotoneIcon } from "../duotone";
        import { FlowArrowFillIcon } from "../fill";
        import { FlowArrowLightIcon } from "../light";
        import { FlowArrowRegularIcon } from "../regular";
        import { FlowArrowThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FlowArrowIcon = memo(function FlowArrow(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FlowArrowBoldIcon,
            duotone: FlowArrowDuotoneIcon,
            fill: FlowArrowFillIcon,
            light: FlowArrowLightIcon,
            regular: FlowArrowRegularIcon,
            thin: FlowArrowThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
