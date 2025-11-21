import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CheckSquareBoldIcon } from "../bold";
        import { CheckSquareDuotoneIcon } from "../duotone";
        import { CheckSquareFillIcon } from "../fill";
        import { CheckSquareLightIcon } from "../light";
        import { CheckSquareRegularIcon } from "../regular";
        import { CheckSquareThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CheckSquareIcon = memo(function CheckSquare(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CheckSquareBoldIcon,
            duotone: CheckSquareDuotoneIcon,
            fill: CheckSquareFillIcon,
            light: CheckSquareLightIcon,
            regular: CheckSquareRegularIcon,
            thin: CheckSquareThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
