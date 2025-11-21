import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { KeyholeBoldIcon } from "../bold";
        import { KeyholeDuotoneIcon } from "../duotone";
        import { KeyholeFillIcon } from "../fill";
        import { KeyholeLightIcon } from "../light";
        import { KeyholeRegularIcon } from "../regular";
        import { KeyholeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const KeyholeIcon = memo(function Keyhole(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: KeyholeBoldIcon,
            duotone: KeyholeDuotoneIcon,
            fill: KeyholeFillIcon,
            light: KeyholeLightIcon,
            regular: KeyholeRegularIcon,
            thin: KeyholeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
