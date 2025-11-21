import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { IceCreamBoldIcon } from "../bold";
        import { IceCreamDuotoneIcon } from "../duotone";
        import { IceCreamFillIcon } from "../fill";
        import { IceCreamLightIcon } from "../light";
        import { IceCreamRegularIcon } from "../regular";
        import { IceCreamThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const IceCreamIcon = memo(function IceCream(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: IceCreamBoldIcon,
            duotone: IceCreamDuotoneIcon,
            fill: IceCreamFillIcon,
            light: IceCreamLightIcon,
            regular: IceCreamRegularIcon,
            thin: IceCreamThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
