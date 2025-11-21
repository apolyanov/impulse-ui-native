import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CodeSimpleBoldIcon } from "../bold";
        import { CodeSimpleDuotoneIcon } from "../duotone";
        import { CodeSimpleFillIcon } from "../fill";
        import { CodeSimpleLightIcon } from "../light";
        import { CodeSimpleRegularIcon } from "../regular";
        import { CodeSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CodeSimpleIcon = memo(function CodeSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CodeSimpleBoldIcon,
            duotone: CodeSimpleDuotoneIcon,
            fill: CodeSimpleFillIcon,
            light: CodeSimpleLightIcon,
            regular: CodeSimpleRegularIcon,
            thin: CodeSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
