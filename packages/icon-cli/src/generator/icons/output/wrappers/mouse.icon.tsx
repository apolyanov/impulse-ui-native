import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MouseBoldIcon } from "../bold";
        import { MouseDuotoneIcon } from "../duotone";
        import { MouseFillIcon } from "../fill";
        import { MouseLightIcon } from "../light";
        import { MouseRegularIcon } from "../regular";
        import { MouseThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MouseIcon = memo(function Mouse(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MouseBoldIcon,
            duotone: MouseDuotoneIcon,
            fill: MouseFillIcon,
            light: MouseLightIcon,
            regular: MouseRegularIcon,
            thin: MouseThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
