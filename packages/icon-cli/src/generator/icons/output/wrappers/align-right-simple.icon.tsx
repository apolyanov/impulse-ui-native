import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AlignRightSimpleBoldIcon } from "../bold";
        import { AlignRightSimpleDuotoneIcon } from "../duotone";
        import { AlignRightSimpleFillIcon } from "../fill";
        import { AlignRightSimpleLightIcon } from "../light";
        import { AlignRightSimpleRegularIcon } from "../regular";
        import { AlignRightSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AlignRightSimpleIcon = memo(function AlignRightSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AlignRightSimpleBoldIcon,
            duotone: AlignRightSimpleDuotoneIcon,
            fill: AlignRightSimpleFillIcon,
            light: AlignRightSimpleLightIcon,
            regular: AlignRightSimpleRegularIcon,
            thin: AlignRightSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
