import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ToggleLeftBoldIcon } from "../bold";
        import { ToggleLeftDuotoneIcon } from "../duotone";
        import { ToggleLeftFillIcon } from "../fill";
        import { ToggleLeftLightIcon } from "../light";
        import { ToggleLeftRegularIcon } from "../regular";
        import { ToggleLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ToggleLeftIcon = memo(function ToggleLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ToggleLeftBoldIcon,
            duotone: ToggleLeftDuotoneIcon,
            fill: ToggleLeftFillIcon,
            light: ToggleLeftLightIcon,
            regular: ToggleLeftRegularIcon,
            thin: ToggleLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
