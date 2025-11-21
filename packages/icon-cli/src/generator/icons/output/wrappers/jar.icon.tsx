import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { JarBoldIcon } from "../bold";
        import { JarDuotoneIcon } from "../duotone";
        import { JarFillIcon } from "../fill";
        import { JarLightIcon } from "../light";
        import { JarRegularIcon } from "../regular";
        import { JarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const JarIcon = memo(function Jar(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: JarBoldIcon,
            duotone: JarDuotoneIcon,
            fill: JarFillIcon,
            light: JarLightIcon,
            regular: JarRegularIcon,
            thin: JarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
