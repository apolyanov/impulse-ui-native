import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DotsThreeOutlineVerticalBoldIcon } from "../bold";
        import { DotsThreeOutlineVerticalDuotoneIcon } from "../duotone";
        import { DotsThreeOutlineVerticalFillIcon } from "../fill";
        import { DotsThreeOutlineVerticalLightIcon } from "../light";
        import { DotsThreeOutlineVerticalRegularIcon } from "../regular";
        import { DotsThreeOutlineVerticalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DotsThreeOutlineVerticalIcon = memo(function DotsThreeOutlineVertical(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DotsThreeOutlineVerticalBoldIcon,
            duotone: DotsThreeOutlineVerticalDuotoneIcon,
            fill: DotsThreeOutlineVerticalFillIcon,
            light: DotsThreeOutlineVerticalLightIcon,
            regular: DotsThreeOutlineVerticalRegularIcon,
            thin: DotsThreeOutlineVerticalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
