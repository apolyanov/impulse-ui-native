import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HandTapBoldIcon } from "../bold";
        import { HandTapDuotoneIcon } from "../duotone";
        import { HandTapFillIcon } from "../fill";
        import { HandTapLightIcon } from "../light";
        import { HandTapRegularIcon } from "../regular";
        import { HandTapThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HandTapIcon = memo(function HandTap(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HandTapBoldIcon,
            duotone: HandTapDuotoneIcon,
            fill: HandTapFillIcon,
            light: HandTapLightIcon,
            regular: HandTapRegularIcon,
            thin: HandTapThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
