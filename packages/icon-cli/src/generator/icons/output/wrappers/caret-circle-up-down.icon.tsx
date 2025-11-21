import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CaretCircleUpDownBoldIcon } from "../bold";
        import { CaretCircleUpDownDuotoneIcon } from "../duotone";
        import { CaretCircleUpDownFillIcon } from "../fill";
        import { CaretCircleUpDownLightIcon } from "../light";
        import { CaretCircleUpDownRegularIcon } from "../regular";
        import { CaretCircleUpDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CaretCircleUpDownIcon = memo(function CaretCircleUpDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CaretCircleUpDownBoldIcon,
            duotone: CaretCircleUpDownDuotoneIcon,
            fill: CaretCircleUpDownFillIcon,
            light: CaretCircleUpDownLightIcon,
            regular: CaretCircleUpDownRegularIcon,
            thin: CaretCircleUpDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
