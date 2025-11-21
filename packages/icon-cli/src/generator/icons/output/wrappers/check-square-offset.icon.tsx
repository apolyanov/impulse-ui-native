import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CheckSquareOffsetBoldIcon } from "../bold";
        import { CheckSquareOffsetDuotoneIcon } from "../duotone";
        import { CheckSquareOffsetFillIcon } from "../fill";
        import { CheckSquareOffsetLightIcon } from "../light";
        import { CheckSquareOffsetRegularIcon } from "../regular";
        import { CheckSquareOffsetThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CheckSquareOffsetIcon = memo(function CheckSquareOffset(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CheckSquareOffsetBoldIcon,
            duotone: CheckSquareOffsetDuotoneIcon,
            fill: CheckSquareOffsetFillIcon,
            light: CheckSquareOffsetLightIcon,
            regular: CheckSquareOffsetRegularIcon,
            thin: CheckSquareOffsetThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
