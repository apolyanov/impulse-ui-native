import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SeatbeltBoldIcon } from "../bold";
        import { SeatbeltDuotoneIcon } from "../duotone";
        import { SeatbeltFillIcon } from "../fill";
        import { SeatbeltLightIcon } from "../light";
        import { SeatbeltRegularIcon } from "../regular";
        import { SeatbeltThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SeatbeltIcon = memo(function Seatbelt(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SeatbeltBoldIcon,
            duotone: SeatbeltDuotoneIcon,
            fill: SeatbeltFillIcon,
            light: SeatbeltLightIcon,
            regular: SeatbeltRegularIcon,
            thin: SeatbeltThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
