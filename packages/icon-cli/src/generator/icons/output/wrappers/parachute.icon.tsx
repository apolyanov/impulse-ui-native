import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ParachuteBoldIcon } from "../bold";
        import { ParachuteDuotoneIcon } from "../duotone";
        import { ParachuteFillIcon } from "../fill";
        import { ParachuteLightIcon } from "../light";
        import { ParachuteRegularIcon } from "../regular";
        import { ParachuteThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ParachuteIcon = memo(function Parachute(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ParachuteBoldIcon,
            duotone: ParachuteDuotoneIcon,
            fill: ParachuteFillIcon,
            light: ParachuteLightIcon,
            regular: ParachuteRegularIcon,
            thin: ParachuteThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
