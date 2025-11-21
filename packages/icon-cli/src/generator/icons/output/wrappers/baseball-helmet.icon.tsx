import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BaseballHelmetBoldIcon } from "../bold";
        import { BaseballHelmetDuotoneIcon } from "../duotone";
        import { BaseballHelmetFillIcon } from "../fill";
        import { BaseballHelmetLightIcon } from "../light";
        import { BaseballHelmetRegularIcon } from "../regular";
        import { BaseballHelmetThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BaseballHelmetIcon = memo(function BaseballHelmet(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BaseballHelmetBoldIcon,
            duotone: BaseballHelmetDuotoneIcon,
            fill: BaseballHelmetFillIcon,
            light: BaseballHelmetLightIcon,
            regular: BaseballHelmetRegularIcon,
            thin: BaseballHelmetThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
