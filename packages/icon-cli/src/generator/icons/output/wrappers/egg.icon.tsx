import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EggBoldIcon } from "../bold";
        import { EggDuotoneIcon } from "../duotone";
        import { EggFillIcon } from "../fill";
        import { EggLightIcon } from "../light";
        import { EggRegularIcon } from "../regular";
        import { EggThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EggIcon = memo(function Egg(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EggBoldIcon,
            duotone: EggDuotoneIcon,
            fill: EggFillIcon,
            light: EggLightIcon,
            regular: EggRegularIcon,
            thin: EggThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
