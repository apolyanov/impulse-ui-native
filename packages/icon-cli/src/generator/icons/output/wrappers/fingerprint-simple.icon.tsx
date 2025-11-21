import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FingerprintSimpleBoldIcon } from "../bold";
        import { FingerprintSimpleDuotoneIcon } from "../duotone";
        import { FingerprintSimpleFillIcon } from "../fill";
        import { FingerprintSimpleLightIcon } from "../light";
        import { FingerprintSimpleRegularIcon } from "../regular";
        import { FingerprintSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FingerprintSimpleIcon = memo(function FingerprintSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FingerprintSimpleBoldIcon,
            duotone: FingerprintSimpleDuotoneIcon,
            fill: FingerprintSimpleFillIcon,
            light: FingerprintSimpleLightIcon,
            regular: FingerprintSimpleRegularIcon,
            thin: FingerprintSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
