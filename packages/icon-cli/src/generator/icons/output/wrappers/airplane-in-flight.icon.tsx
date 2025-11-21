import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AirplaneInFlightBoldIcon } from "../bold";
        import { AirplaneInFlightDuotoneIcon } from "../duotone";
        import { AirplaneInFlightFillIcon } from "../fill";
        import { AirplaneInFlightLightIcon } from "../light";
        import { AirplaneInFlightRegularIcon } from "../regular";
        import { AirplaneInFlightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AirplaneInFlightIcon = memo(function AirplaneInFlight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AirplaneInFlightBoldIcon,
            duotone: AirplaneInFlightDuotoneIcon,
            fill: AirplaneInFlightFillIcon,
            light: AirplaneInFlightLightIcon,
            regular: AirplaneInFlightRegularIcon,
            thin: AirplaneInFlightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
