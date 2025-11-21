import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { KeyReturnBoldIcon } from "../bold";
        import { KeyReturnDuotoneIcon } from "../duotone";
        import { KeyReturnFillIcon } from "../fill";
        import { KeyReturnLightIcon } from "../light";
        import { KeyReturnRegularIcon } from "../regular";
        import { KeyReturnThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const KeyReturnIcon = memo(function KeyReturn(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: KeyReturnBoldIcon,
            duotone: KeyReturnDuotoneIcon,
            fill: KeyReturnFillIcon,
            light: KeyReturnLightIcon,
            regular: KeyReturnRegularIcon,
            thin: KeyReturnThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
