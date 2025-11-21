import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TramBoldIcon } from "../bold";
        import { TramDuotoneIcon } from "../duotone";
        import { TramFillIcon } from "../fill";
        import { TramLightIcon } from "../light";
        import { TramRegularIcon } from "../regular";
        import { TramThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TramIcon = memo(function Tram(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TramBoldIcon,
            duotone: TramDuotoneIcon,
            fill: TramFillIcon,
            light: TramLightIcon,
            regular: TramRegularIcon,
            thin: TramThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
