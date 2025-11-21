import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CloudMoonBoldIcon } from "../bold";
        import { CloudMoonDuotoneIcon } from "../duotone";
        import { CloudMoonFillIcon } from "../fill";
        import { CloudMoonLightIcon } from "../light";
        import { CloudMoonRegularIcon } from "../regular";
        import { CloudMoonThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CloudMoonIcon = memo(function CloudMoon(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CloudMoonBoldIcon,
            duotone: CloudMoonDuotoneIcon,
            fill: CloudMoonFillIcon,
            light: CloudMoonLightIcon,
            regular: CloudMoonRegularIcon,
            thin: CloudMoonThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
