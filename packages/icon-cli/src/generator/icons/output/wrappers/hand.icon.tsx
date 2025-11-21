import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HandBoldIcon } from "../bold";
        import { HandDuotoneIcon } from "../duotone";
        import { HandFillIcon } from "../fill";
        import { HandLightIcon } from "../light";
        import { HandRegularIcon } from "../regular";
        import { HandThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HandIcon = memo(function Hand(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HandBoldIcon,
            duotone: HandDuotoneIcon,
            fill: HandFillIcon,
            light: HandLightIcon,
            regular: HandRegularIcon,
            thin: HandThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
