import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowElbowDownRightBoldIcon } from "../bold";
        import { ArrowElbowDownRightDuotoneIcon } from "../duotone";
        import { ArrowElbowDownRightFillIcon } from "../fill";
        import { ArrowElbowDownRightLightIcon } from "../light";
        import { ArrowElbowDownRightRegularIcon } from "../regular";
        import { ArrowElbowDownRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowElbowDownRightIcon = memo(function ArrowElbowDownRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowElbowDownRightBoldIcon,
            duotone: ArrowElbowDownRightDuotoneIcon,
            fill: ArrowElbowDownRightFillIcon,
            light: ArrowElbowDownRightLightIcon,
            regular: ArrowElbowDownRightRegularIcon,
            thin: ArrowElbowDownRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
