import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NotEqualsBoldIcon } from "../bold";
        import { NotEqualsDuotoneIcon } from "../duotone";
        import { NotEqualsFillIcon } from "../fill";
        import { NotEqualsLightIcon } from "../light";
        import { NotEqualsRegularIcon } from "../regular";
        import { NotEqualsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NotEqualsIcon = memo(function NotEquals(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NotEqualsBoldIcon,
            duotone: NotEqualsDuotoneIcon,
            fill: NotEqualsFillIcon,
            light: NotEqualsLightIcon,
            regular: NotEqualsRegularIcon,
            thin: NotEqualsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
