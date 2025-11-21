import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { KeyBoldIcon } from "../bold";
        import { KeyDuotoneIcon } from "../duotone";
        import { KeyFillIcon } from "../fill";
        import { KeyLightIcon } from "../light";
        import { KeyRegularIcon } from "../regular";
        import { KeyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const KeyIcon = memo(function Key(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: KeyBoldIcon,
            duotone: KeyDuotoneIcon,
            fill: KeyFillIcon,
            light: KeyLightIcon,
            regular: KeyRegularIcon,
            thin: KeyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
