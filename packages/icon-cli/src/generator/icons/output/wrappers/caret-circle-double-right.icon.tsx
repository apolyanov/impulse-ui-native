import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CaretCircleDoubleRightBoldIcon } from "../bold";
        import { CaretCircleDoubleRightDuotoneIcon } from "../duotone";
        import { CaretCircleDoubleRightFillIcon } from "../fill";
        import { CaretCircleDoubleRightLightIcon } from "../light";
        import { CaretCircleDoubleRightRegularIcon } from "../regular";
        import { CaretCircleDoubleRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CaretCircleDoubleRightIcon = memo(function CaretCircleDoubleRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CaretCircleDoubleRightBoldIcon,
            duotone: CaretCircleDoubleRightDuotoneIcon,
            fill: CaretCircleDoubleRightFillIcon,
            light: CaretCircleDoubleRightLightIcon,
            regular: CaretCircleDoubleRightRegularIcon,
            thin: CaretCircleDoubleRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
