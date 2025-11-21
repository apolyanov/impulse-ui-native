import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FaceMaskBoldIcon } from "../bold";
        import { FaceMaskDuotoneIcon } from "../duotone";
        import { FaceMaskFillIcon } from "../fill";
        import { FaceMaskLightIcon } from "../light";
        import { FaceMaskRegularIcon } from "../regular";
        import { FaceMaskThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FaceMaskIcon = memo(function FaceMask(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FaceMaskBoldIcon,
            duotone: FaceMaskDuotoneIcon,
            fill: FaceMaskFillIcon,
            light: FaceMaskLightIcon,
            regular: FaceMaskRegularIcon,
            thin: FaceMaskThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
