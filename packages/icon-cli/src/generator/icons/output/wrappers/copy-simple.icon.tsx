import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CopySimpleBoldIcon } from "../bold";
        import { CopySimpleDuotoneIcon } from "../duotone";
        import { CopySimpleFillIcon } from "../fill";
        import { CopySimpleLightIcon } from "../light";
        import { CopySimpleRegularIcon } from "../regular";
        import { CopySimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CopySimpleIcon = memo(function CopySimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CopySimpleBoldIcon,
            duotone: CopySimpleDuotoneIcon,
            fill: CopySimpleFillIcon,
            light: CopySimpleLightIcon,
            regular: CopySimpleRegularIcon,
            thin: CopySimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
