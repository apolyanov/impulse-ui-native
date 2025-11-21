import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NumberSquareOneBoldIcon } from "../bold";
        import { NumberSquareOneDuotoneIcon } from "../duotone";
        import { NumberSquareOneFillIcon } from "../fill";
        import { NumberSquareOneLightIcon } from "../light";
        import { NumberSquareOneRegularIcon } from "../regular";
        import { NumberSquareOneThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NumberSquareOneIcon = memo(function NumberSquareOne(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NumberSquareOneBoldIcon,
            duotone: NumberSquareOneDuotoneIcon,
            fill: NumberSquareOneFillIcon,
            light: NumberSquareOneLightIcon,
            regular: NumberSquareOneRegularIcon,
            thin: NumberSquareOneThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
