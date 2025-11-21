import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ElevatorBoldIcon } from "../bold";
        import { ElevatorDuotoneIcon } from "../duotone";
        import { ElevatorFillIcon } from "../fill";
        import { ElevatorLightIcon } from "../light";
        import { ElevatorRegularIcon } from "../regular";
        import { ElevatorThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ElevatorIcon = memo(function Elevator(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ElevatorBoldIcon,
            duotone: ElevatorDuotoneIcon,
            fill: ElevatorFillIcon,
            light: ElevatorLightIcon,
            regular: ElevatorRegularIcon,
            thin: ElevatorThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
