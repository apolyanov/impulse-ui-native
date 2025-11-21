import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChalkboardSimpleBoldIcon } from "../bold";
        import { ChalkboardSimpleDuotoneIcon } from "../duotone";
        import { ChalkboardSimpleFillIcon } from "../fill";
        import { ChalkboardSimpleLightIcon } from "../light";
        import { ChalkboardSimpleRegularIcon } from "../regular";
        import { ChalkboardSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChalkboardSimpleIcon = memo(function ChalkboardSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChalkboardSimpleBoldIcon,
            duotone: ChalkboardSimpleDuotoneIcon,
            fill: ChalkboardSimpleFillIcon,
            light: ChalkboardSimpleLightIcon,
            regular: ChalkboardSimpleRegularIcon,
            thin: ChalkboardSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
