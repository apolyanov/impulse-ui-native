import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { RocketBoldIcon } from "../bold";
        import { RocketDuotoneIcon } from "../duotone";
        import { RocketFillIcon } from "../fill";
        import { RocketLightIcon } from "../light";
        import { RocketRegularIcon } from "../regular";
        import { RocketThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const RocketIcon = memo(function Rocket(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: RocketBoldIcon,
            duotone: RocketDuotoneIcon,
            fill: RocketFillIcon,
            light: RocketLightIcon,
            regular: RocketRegularIcon,
            thin: RocketThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
