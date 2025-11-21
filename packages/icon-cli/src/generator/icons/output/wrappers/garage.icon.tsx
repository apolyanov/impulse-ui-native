import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GarageBoldIcon } from "../bold";
        import { GarageDuotoneIcon } from "../duotone";
        import { GarageFillIcon } from "../fill";
        import { GarageLightIcon } from "../light";
        import { GarageRegularIcon } from "../regular";
        import { GarageThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GarageIcon = memo(function Garage(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GarageBoldIcon,
            duotone: GarageDuotoneIcon,
            fill: GarageFillIcon,
            light: GarageLightIcon,
            regular: GarageRegularIcon,
            thin: GarageThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
