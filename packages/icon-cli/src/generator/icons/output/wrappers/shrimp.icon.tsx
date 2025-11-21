import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ShrimpBoldIcon } from "../bold";
        import { ShrimpDuotoneIcon } from "../duotone";
        import { ShrimpFillIcon } from "../fill";
        import { ShrimpLightIcon } from "../light";
        import { ShrimpRegularIcon } from "../regular";
        import { ShrimpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ShrimpIcon = memo(function Shrimp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ShrimpBoldIcon,
            duotone: ShrimpDuotoneIcon,
            fill: ShrimpFillIcon,
            light: ShrimpLightIcon,
            regular: ShrimpRegularIcon,
            thin: ShrimpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
