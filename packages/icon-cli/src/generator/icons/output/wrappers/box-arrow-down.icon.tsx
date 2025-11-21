import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BoxArrowDownBoldIcon } from "../bold";
        import { BoxArrowDownDuotoneIcon } from "../duotone";
        import { BoxArrowDownFillIcon } from "../fill";
        import { BoxArrowDownLightIcon } from "../light";
        import { BoxArrowDownRegularIcon } from "../regular";
        import { BoxArrowDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BoxArrowDownIcon = memo(function BoxArrowDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BoxArrowDownBoldIcon,
            duotone: BoxArrowDownDuotoneIcon,
            fill: BoxArrowDownFillIcon,
            light: BoxArrowDownLightIcon,
            regular: BoxArrowDownRegularIcon,
            thin: BoxArrowDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
