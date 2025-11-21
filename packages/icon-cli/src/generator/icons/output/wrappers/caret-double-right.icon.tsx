import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CaretDoubleRightBoldIcon } from "../bold";
        import { CaretDoubleRightDuotoneIcon } from "../duotone";
        import { CaretDoubleRightFillIcon } from "../fill";
        import { CaretDoubleRightLightIcon } from "../light";
        import { CaretDoubleRightRegularIcon } from "../regular";
        import { CaretDoubleRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CaretDoubleRightIcon = memo(function CaretDoubleRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CaretDoubleRightBoldIcon,
            duotone: CaretDoubleRightDuotoneIcon,
            fill: CaretDoubleRightFillIcon,
            light: CaretDoubleRightLightIcon,
            regular: CaretDoubleRightRegularIcon,
            thin: CaretDoubleRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
