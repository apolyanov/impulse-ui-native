import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { UmbrellaSimpleBoldIcon } from "../bold";
        import { UmbrellaSimpleDuotoneIcon } from "../duotone";
        import { UmbrellaSimpleFillIcon } from "../fill";
        import { UmbrellaSimpleLightIcon } from "../light";
        import { UmbrellaSimpleRegularIcon } from "../regular";
        import { UmbrellaSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const UmbrellaSimpleIcon = memo(function UmbrellaSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: UmbrellaSimpleBoldIcon,
            duotone: UmbrellaSimpleDuotoneIcon,
            fill: UmbrellaSimpleFillIcon,
            light: UmbrellaSimpleLightIcon,
            regular: UmbrellaSimpleRegularIcon,
            thin: UmbrellaSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
