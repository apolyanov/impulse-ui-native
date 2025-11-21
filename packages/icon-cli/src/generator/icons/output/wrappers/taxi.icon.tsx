import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TaxiBoldIcon } from "../bold";
        import { TaxiDuotoneIcon } from "../duotone";
        import { TaxiFillIcon } from "../fill";
        import { TaxiLightIcon } from "../light";
        import { TaxiRegularIcon } from "../regular";
        import { TaxiThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TaxiIcon = memo(function Taxi(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TaxiBoldIcon,
            duotone: TaxiDuotoneIcon,
            fill: TaxiFillIcon,
            light: TaxiLightIcon,
            regular: TaxiRegularIcon,
            thin: TaxiThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
