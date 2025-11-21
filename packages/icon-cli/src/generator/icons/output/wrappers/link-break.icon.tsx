import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LinkBreakBoldIcon } from "../bold";
        import { LinkBreakDuotoneIcon } from "../duotone";
        import { LinkBreakFillIcon } from "../fill";
        import { LinkBreakLightIcon } from "../light";
        import { LinkBreakRegularIcon } from "../regular";
        import { LinkBreakThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LinkBreakIcon = memo(function LinkBreak(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LinkBreakBoldIcon,
            duotone: LinkBreakDuotoneIcon,
            fill: LinkBreakFillIcon,
            light: LinkBreakLightIcon,
            regular: LinkBreakRegularIcon,
            thin: LinkBreakThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
