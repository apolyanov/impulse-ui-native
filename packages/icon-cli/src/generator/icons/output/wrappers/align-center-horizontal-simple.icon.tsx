import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AlignCenterHorizontalSimpleBoldIcon } from "../bold";
        import { AlignCenterHorizontalSimpleDuotoneIcon } from "../duotone";
        import { AlignCenterHorizontalSimpleFillIcon } from "../fill";
        import { AlignCenterHorizontalSimpleLightIcon } from "../light";
        import { AlignCenterHorizontalSimpleRegularIcon } from "../regular";
        import { AlignCenterHorizontalSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AlignCenterHorizontalSimpleIcon = memo(function AlignCenterHorizontalSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AlignCenterHorizontalSimpleBoldIcon,
            duotone: AlignCenterHorizontalSimpleDuotoneIcon,
            fill: AlignCenterHorizontalSimpleFillIcon,
            light: AlignCenterHorizontalSimpleLightIcon,
            regular: AlignCenterHorizontalSimpleRegularIcon,
            thin: AlignCenterHorizontalSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
