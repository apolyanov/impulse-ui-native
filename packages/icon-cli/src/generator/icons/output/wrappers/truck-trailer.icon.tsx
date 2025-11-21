import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TruckTrailerBoldIcon } from "../bold";
        import { TruckTrailerDuotoneIcon } from "../duotone";
        import { TruckTrailerFillIcon } from "../fill";
        import { TruckTrailerLightIcon } from "../light";
        import { TruckTrailerRegularIcon } from "../regular";
        import { TruckTrailerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TruckTrailerIcon = memo(function TruckTrailer(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TruckTrailerBoldIcon,
            duotone: TruckTrailerDuotoneIcon,
            fill: TruckTrailerFillIcon,
            light: TruckTrailerLightIcon,
            regular: TruckTrailerRegularIcon,
            thin: TruckTrailerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
