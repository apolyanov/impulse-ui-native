import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FireBoldIcon } from "../bold";
        import { FireDuotoneIcon } from "../duotone";
        import { FireFillIcon } from "../fill";
        import { FireLightIcon } from "../light";
        import { FireRegularIcon } from "../regular";
        import { FireThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FireIcon = memo(function Fire(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FireBoldIcon,
            duotone: FireDuotoneIcon,
            fill: FireFillIcon,
            light: FireLightIcon,
            regular: FireRegularIcon,
            thin: FireThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
