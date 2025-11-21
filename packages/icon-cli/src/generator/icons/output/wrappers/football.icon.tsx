import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FootballBoldIcon } from "../bold";
        import { FootballDuotoneIcon } from "../duotone";
        import { FootballFillIcon } from "../fill";
        import { FootballLightIcon } from "../light";
        import { FootballRegularIcon } from "../regular";
        import { FootballThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FootballIcon = memo(function Football(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FootballBoldIcon,
            duotone: FootballDuotoneIcon,
            fill: FootballFillIcon,
            light: FootballLightIcon,
            regular: FootballRegularIcon,
            thin: FootballThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
