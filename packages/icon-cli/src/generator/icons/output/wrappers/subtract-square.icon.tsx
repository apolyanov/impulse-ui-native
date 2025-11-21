import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SubtractSquareBoldIcon } from "../bold";
        import { SubtractSquareDuotoneIcon } from "../duotone";
        import { SubtractSquareFillIcon } from "../fill";
        import { SubtractSquareLightIcon } from "../light";
        import { SubtractSquareRegularIcon } from "../regular";
        import { SubtractSquareThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SubtractSquareIcon = memo(function SubtractSquare(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SubtractSquareBoldIcon,
            duotone: SubtractSquareDuotoneIcon,
            fill: SubtractSquareFillIcon,
            light: SubtractSquareLightIcon,
            regular: SubtractSquareRegularIcon,
            thin: SubtractSquareThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
