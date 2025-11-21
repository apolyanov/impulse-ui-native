import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ParkBoldIcon } from "../bold";
        import { ParkDuotoneIcon } from "../duotone";
        import { ParkFillIcon } from "../fill";
        import { ParkLightIcon } from "../light";
        import { ParkRegularIcon } from "../regular";
        import { ParkThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ParkIcon = memo(function Park(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ParkBoldIcon,
            duotone: ParkDuotoneIcon,
            fill: ParkFillIcon,
            light: ParkLightIcon,
            regular: ParkRegularIcon,
            thin: ParkThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
