import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BoxArrowUpBoldIcon } from "../bold";
        import { BoxArrowUpDuotoneIcon } from "../duotone";
        import { BoxArrowUpFillIcon } from "../fill";
        import { BoxArrowUpLightIcon } from "../light";
        import { BoxArrowUpRegularIcon } from "../regular";
        import { BoxArrowUpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BoxArrowUpIcon = memo(function BoxArrowUp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BoxArrowUpBoldIcon,
            duotone: BoxArrowUpDuotoneIcon,
            fill: BoxArrowUpFillIcon,
            light: BoxArrowUpLightIcon,
            regular: BoxArrowUpRegularIcon,
            thin: BoxArrowUpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
