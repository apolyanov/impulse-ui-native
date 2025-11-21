import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CaretUpDownBoldIcon } from "../bold";
        import { CaretUpDownDuotoneIcon } from "../duotone";
        import { CaretUpDownFillIcon } from "../fill";
        import { CaretUpDownLightIcon } from "../light";
        import { CaretUpDownRegularIcon } from "../regular";
        import { CaretUpDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CaretUpDownIcon = memo(function CaretUpDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CaretUpDownBoldIcon,
            duotone: CaretUpDownDuotoneIcon,
            fill: CaretUpDownFillIcon,
            light: CaretUpDownLightIcon,
            regular: CaretUpDownRegularIcon,
            thin: CaretUpDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
