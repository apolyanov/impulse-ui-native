import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { EarBoldIcon } from "../bold";
        import { EarDuotoneIcon } from "../duotone";
        import { EarFillIcon } from "../fill";
        import { EarLightIcon } from "../light";
        import { EarRegularIcon } from "../regular";
        import { EarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const EarIcon = memo(function Ear(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: EarBoldIcon,
            duotone: EarDuotoneIcon,
            fill: EarFillIcon,
            light: EarLightIcon,
            regular: EarRegularIcon,
            thin: EarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
