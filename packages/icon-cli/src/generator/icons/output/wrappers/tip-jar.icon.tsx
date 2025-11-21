import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TipJarBoldIcon } from "../bold";
        import { TipJarDuotoneIcon } from "../duotone";
        import { TipJarFillIcon } from "../fill";
        import { TipJarLightIcon } from "../light";
        import { TipJarRegularIcon } from "../regular";
        import { TipJarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TipJarIcon = memo(function TipJar(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TipJarBoldIcon,
            duotone: TipJarDuotoneIcon,
            fill: TipJarFillIcon,
            light: TipJarLightIcon,
            regular: TipJarRegularIcon,
            thin: TipJarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
