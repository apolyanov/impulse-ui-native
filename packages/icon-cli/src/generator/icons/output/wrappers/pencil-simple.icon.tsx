import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PencilSimpleBoldIcon } from "../bold";
        import { PencilSimpleDuotoneIcon } from "../duotone";
        import { PencilSimpleFillIcon } from "../fill";
        import { PencilSimpleLightIcon } from "../light";
        import { PencilSimpleRegularIcon } from "../regular";
        import { PencilSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PencilSimpleIcon = memo(function PencilSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PencilSimpleBoldIcon,
            duotone: PencilSimpleDuotoneIcon,
            fill: PencilSimpleFillIcon,
            light: PencilSimpleLightIcon,
            regular: PencilSimpleRegularIcon,
            thin: PencilSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
