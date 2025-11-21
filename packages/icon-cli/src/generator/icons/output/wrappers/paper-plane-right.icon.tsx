import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PaperPlaneRightBoldIcon } from "../bold";
        import { PaperPlaneRightDuotoneIcon } from "../duotone";
        import { PaperPlaneRightFillIcon } from "../fill";
        import { PaperPlaneRightLightIcon } from "../light";
        import { PaperPlaneRightRegularIcon } from "../regular";
        import { PaperPlaneRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PaperPlaneRightIcon = memo(function PaperPlaneRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PaperPlaneRightBoldIcon,
            duotone: PaperPlaneRightDuotoneIcon,
            fill: PaperPlaneRightFillIcon,
            light: PaperPlaneRightLightIcon,
            regular: PaperPlaneRightRegularIcon,
            thin: PaperPlaneRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
