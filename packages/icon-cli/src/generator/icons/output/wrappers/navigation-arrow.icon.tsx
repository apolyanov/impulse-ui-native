import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NavigationArrowBoldIcon } from "../bold";
        import { NavigationArrowDuotoneIcon } from "../duotone";
        import { NavigationArrowFillIcon } from "../fill";
        import { NavigationArrowLightIcon } from "../light";
        import { NavigationArrowRegularIcon } from "../regular";
        import { NavigationArrowThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NavigationArrowIcon = memo(function NavigationArrow(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NavigationArrowBoldIcon,
            duotone: NavigationArrowDuotoneIcon,
            fill: NavigationArrowFillIcon,
            light: NavigationArrowLightIcon,
            regular: NavigationArrowRegularIcon,
            thin: NavigationArrowThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
