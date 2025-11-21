import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ToggleRightBoldIcon } from "../bold";
        import { ToggleRightDuotoneIcon } from "../duotone";
        import { ToggleRightFillIcon } from "../fill";
        import { ToggleRightLightIcon } from "../light";
        import { ToggleRightRegularIcon } from "../regular";
        import { ToggleRightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ToggleRightIcon = memo(function ToggleRight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ToggleRightBoldIcon,
            duotone: ToggleRightDuotoneIcon,
            fill: ToggleRightFillIcon,
            light: ToggleRightLightIcon,
            regular: ToggleRightRegularIcon,
            thin: ToggleRightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
