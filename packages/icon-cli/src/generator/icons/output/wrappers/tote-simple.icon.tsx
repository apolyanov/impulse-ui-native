import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ToteSimpleBoldIcon } from "../bold";
        import { ToteSimpleDuotoneIcon } from "../duotone";
        import { ToteSimpleFillIcon } from "../fill";
        import { ToteSimpleLightIcon } from "../light";
        import { ToteSimpleRegularIcon } from "../regular";
        import { ToteSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ToteSimpleIcon = memo(function ToteSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ToteSimpleBoldIcon,
            duotone: ToteSimpleDuotoneIcon,
            fill: ToteSimpleFillIcon,
            light: ToteSimpleLightIcon,
            regular: ToteSimpleRegularIcon,
            thin: ToteSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
