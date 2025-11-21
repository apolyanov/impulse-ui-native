import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LightbulbFilamentBoldIcon } from "../bold";
        import { LightbulbFilamentDuotoneIcon } from "../duotone";
        import { LightbulbFilamentFillIcon } from "../fill";
        import { LightbulbFilamentLightIcon } from "../light";
        import { LightbulbFilamentRegularIcon } from "../regular";
        import { LightbulbFilamentThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LightbulbFilamentIcon = memo(function LightbulbFilament(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LightbulbFilamentBoldIcon,
            duotone: LightbulbFilamentDuotoneIcon,
            fill: LightbulbFilamentFillIcon,
            light: LightbulbFilamentLightIcon,
            regular: LightbulbFilamentRegularIcon,
            thin: LightbulbFilamentThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
