import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BeachBallBoldIcon } from "../bold";
        import { BeachBallDuotoneIcon } from "../duotone";
        import { BeachBallFillIcon } from "../fill";
        import { BeachBallLightIcon } from "../light";
        import { BeachBallRegularIcon } from "../regular";
        import { BeachBallThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BeachBallIcon = memo(function BeachBall(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BeachBallBoldIcon,
            duotone: BeachBallDuotoneIcon,
            fill: BeachBallFillIcon,
            light: BeachBallLightIcon,
            regular: BeachBallRegularIcon,
            thin: BeachBallThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
