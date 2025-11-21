import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BoatBoldIcon } from "../bold";
        import { BoatDuotoneIcon } from "../duotone";
        import { BoatFillIcon } from "../fill";
        import { BoatLightIcon } from "../light";
        import { BoatRegularIcon } from "../regular";
        import { BoatThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BoatIcon = memo(function Boat(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BoatBoldIcon,
            duotone: BoatDuotoneIcon,
            fill: BoatFillIcon,
            light: BoatLightIcon,
            regular: BoatRegularIcon,
            thin: BoatThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
