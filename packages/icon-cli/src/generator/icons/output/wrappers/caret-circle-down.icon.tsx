import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CaretCircleDownBoldIcon } from "../bold";
        import { CaretCircleDownDuotoneIcon } from "../duotone";
        import { CaretCircleDownFillIcon } from "../fill";
        import { CaretCircleDownLightIcon } from "../light";
        import { CaretCircleDownRegularIcon } from "../regular";
        import { CaretCircleDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CaretCircleDownIcon = memo(function CaretCircleDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CaretCircleDownBoldIcon,
            duotone: CaretCircleDownDuotoneIcon,
            fill: CaretCircleDownFillIcon,
            light: CaretCircleDownLightIcon,
            regular: CaretCircleDownRegularIcon,
            thin: CaretCircleDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
