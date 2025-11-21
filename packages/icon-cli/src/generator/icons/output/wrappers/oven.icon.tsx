import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { OvenBoldIcon } from "../bold";
        import { OvenDuotoneIcon } from "../duotone";
        import { OvenFillIcon } from "../fill";
        import { OvenLightIcon } from "../light";
        import { OvenRegularIcon } from "../regular";
        import { OvenThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const OvenIcon = memo(function Oven(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: OvenBoldIcon,
            duotone: OvenDuotoneIcon,
            fill: OvenFillIcon,
            light: OvenLightIcon,
            regular: OvenRegularIcon,
            thin: OvenThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
