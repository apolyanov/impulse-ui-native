import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CircleDashedBoldIcon } from "../bold";
        import { CircleDashedDuotoneIcon } from "../duotone";
        import { CircleDashedFillIcon } from "../fill";
        import { CircleDashedLightIcon } from "../light";
        import { CircleDashedRegularIcon } from "../regular";
        import { CircleDashedThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CircleDashedIcon = memo(function CircleDashed(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CircleDashedBoldIcon,
            duotone: CircleDashedDuotoneIcon,
            fill: CircleDashedFillIcon,
            light: CircleDashedLightIcon,
            regular: CircleDashedRegularIcon,
            thin: CircleDashedThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
