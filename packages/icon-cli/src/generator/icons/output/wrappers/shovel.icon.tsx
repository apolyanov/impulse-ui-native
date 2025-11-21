import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ShovelBoldIcon } from "../bold";
        import { ShovelDuotoneIcon } from "../duotone";
        import { ShovelFillIcon } from "../fill";
        import { ShovelLightIcon } from "../light";
        import { ShovelRegularIcon } from "../regular";
        import { ShovelThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ShovelIcon = memo(function Shovel(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ShovelBoldIcon,
            duotone: ShovelDuotoneIcon,
            fill: ShovelFillIcon,
            light: ShovelLightIcon,
            regular: ShovelRegularIcon,
            thin: ShovelThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
