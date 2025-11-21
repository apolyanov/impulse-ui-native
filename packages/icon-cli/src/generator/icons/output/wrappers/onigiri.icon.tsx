import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { OnigiriBoldIcon } from "../bold";
        import { OnigiriDuotoneIcon } from "../duotone";
        import { OnigiriFillIcon } from "../fill";
        import { OnigiriLightIcon } from "../light";
        import { OnigiriRegularIcon } from "../regular";
        import { OnigiriThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const OnigiriIcon = memo(function Onigiri(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: OnigiriBoldIcon,
            duotone: OnigiriDuotoneIcon,
            fill: OnigiriFillIcon,
            light: OnigiriLightIcon,
            regular: OnigiriRegularIcon,
            thin: OnigiriThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
