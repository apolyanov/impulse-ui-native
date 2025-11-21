import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HandArrowUpBoldIcon } from "../bold";
        import { HandArrowUpDuotoneIcon } from "../duotone";
        import { HandArrowUpFillIcon } from "../fill";
        import { HandArrowUpLightIcon } from "../light";
        import { HandArrowUpRegularIcon } from "../regular";
        import { HandArrowUpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HandArrowUpIcon = memo(function HandArrowUp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HandArrowUpBoldIcon,
            duotone: HandArrowUpDuotoneIcon,
            fill: HandArrowUpFillIcon,
            light: HandArrowUpLightIcon,
            regular: HandArrowUpRegularIcon,
            thin: HandArrowUpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
