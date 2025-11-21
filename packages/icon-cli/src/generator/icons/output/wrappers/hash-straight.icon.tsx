import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HashStraightBoldIcon } from "../bold";
        import { HashStraightDuotoneIcon } from "../duotone";
        import { HashStraightFillIcon } from "../fill";
        import { HashStraightLightIcon } from "../light";
        import { HashStraightRegularIcon } from "../regular";
        import { HashStraightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HashStraightIcon = memo(function HashStraight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HashStraightBoldIcon,
            duotone: HashStraightDuotoneIcon,
            fill: HashStraightFillIcon,
            light: HashStraightLightIcon,
            regular: HashStraightRegularIcon,
            thin: HashStraightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
