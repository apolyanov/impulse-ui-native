import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HockeyBoldIcon } from "../bold";
        import { HockeyDuotoneIcon } from "../duotone";
        import { HockeyFillIcon } from "../fill";
        import { HockeyLightIcon } from "../light";
        import { HockeyRegularIcon } from "../regular";
        import { HockeyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HockeyIcon = memo(function Hockey(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HockeyBoldIcon,
            duotone: HockeyDuotoneIcon,
            fill: HockeyFillIcon,
            light: HockeyLightIcon,
            regular: HockeyRegularIcon,
            thin: HockeyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
