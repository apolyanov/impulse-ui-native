import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BaseballCapBoldIcon } from "../bold";
        import { BaseballCapDuotoneIcon } from "../duotone";
        import { BaseballCapFillIcon } from "../fill";
        import { BaseballCapLightIcon } from "../light";
        import { BaseballCapRegularIcon } from "../regular";
        import { BaseballCapThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BaseballCapIcon = memo(function BaseballCap(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BaseballCapBoldIcon,
            duotone: BaseballCapDuotoneIcon,
            fill: BaseballCapFillIcon,
            light: BaseballCapLightIcon,
            regular: BaseballCapRegularIcon,
            thin: BaseballCapThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
