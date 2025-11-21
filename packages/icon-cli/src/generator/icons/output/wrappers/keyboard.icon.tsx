import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { KeyboardBoldIcon } from "../bold";
        import { KeyboardDuotoneIcon } from "../duotone";
        import { KeyboardFillIcon } from "../fill";
        import { KeyboardLightIcon } from "../light";
        import { KeyboardRegularIcon } from "../regular";
        import { KeyboardThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const KeyboardIcon = memo(function Keyboard(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: KeyboardBoldIcon,
            duotone: KeyboardDuotoneIcon,
            fill: KeyboardFillIcon,
            light: KeyboardLightIcon,
            regular: KeyboardRegularIcon,
            thin: KeyboardThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
