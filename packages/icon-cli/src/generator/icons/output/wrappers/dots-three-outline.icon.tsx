import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DotsThreeOutlineBoldIcon } from "../bold";
        import { DotsThreeOutlineDuotoneIcon } from "../duotone";
        import { DotsThreeOutlineFillIcon } from "../fill";
        import { DotsThreeOutlineLightIcon } from "../light";
        import { DotsThreeOutlineRegularIcon } from "../regular";
        import { DotsThreeOutlineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DotsThreeOutlineIcon = memo(function DotsThreeOutline(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DotsThreeOutlineBoldIcon,
            duotone: DotsThreeOutlineDuotoneIcon,
            fill: DotsThreeOutlineFillIcon,
            light: DotsThreeOutlineLightIcon,
            regular: DotsThreeOutlineRegularIcon,
            thin: DotsThreeOutlineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
