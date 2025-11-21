import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CaretDownBoldIcon } from "../bold";
        import { CaretDownDuotoneIcon } from "../duotone";
        import { CaretDownFillIcon } from "../fill";
        import { CaretDownLightIcon } from "../light";
        import { CaretDownRegularIcon } from "../regular";
        import { CaretDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CaretDownIcon = memo(function CaretDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CaretDownBoldIcon,
            duotone: CaretDownDuotoneIcon,
            fill: CaretDownFillIcon,
            light: CaretDownLightIcon,
            regular: CaretDownRegularIcon,
            thin: CaretDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
