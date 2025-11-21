import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PersonSimpleBoldIcon } from "../bold";
        import { PersonSimpleDuotoneIcon } from "../duotone";
        import { PersonSimpleFillIcon } from "../fill";
        import { PersonSimpleLightIcon } from "../light";
        import { PersonSimpleRegularIcon } from "../regular";
        import { PersonSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PersonSimpleIcon = memo(function PersonSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PersonSimpleBoldIcon,
            duotone: PersonSimpleDuotoneIcon,
            fill: PersonSimpleFillIcon,
            light: PersonSimpleLightIcon,
            regular: PersonSimpleRegularIcon,
            thin: PersonSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
