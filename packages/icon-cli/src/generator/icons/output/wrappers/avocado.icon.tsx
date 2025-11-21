import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AvocadoBoldIcon } from "../bold";
        import { AvocadoDuotoneIcon } from "../duotone";
        import { AvocadoFillIcon } from "../fill";
        import { AvocadoLightIcon } from "../light";
        import { AvocadoRegularIcon } from "../regular";
        import { AvocadoThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AvocadoIcon = memo(function Avocado(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AvocadoBoldIcon,
            duotone: AvocadoDuotoneIcon,
            fill: AvocadoFillIcon,
            light: AvocadoLightIcon,
            regular: AvocadoRegularIcon,
            thin: AvocadoThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
