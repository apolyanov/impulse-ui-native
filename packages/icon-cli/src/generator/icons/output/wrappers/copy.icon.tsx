import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CopyBoldIcon } from "../bold";
        import { CopyDuotoneIcon } from "../duotone";
        import { CopyFillIcon } from "../fill";
        import { CopyLightIcon } from "../light";
        import { CopyRegularIcon } from "../regular";
        import { CopyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CopyIcon = memo(function Copy(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CopyBoldIcon,
            duotone: CopyDuotoneIcon,
            fill: CopyFillIcon,
            light: CopyLightIcon,
            regular: CopyRegularIcon,
            thin: CopyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
