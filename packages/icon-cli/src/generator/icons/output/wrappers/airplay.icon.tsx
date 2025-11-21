import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AirplayBoldIcon } from "../bold";
        import { AirplayDuotoneIcon } from "../duotone";
        import { AirplayFillIcon } from "../fill";
        import { AirplayLightIcon } from "../light";
        import { AirplayRegularIcon } from "../regular";
        import { AirplayThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AirplayIcon = memo(function Airplay(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AirplayBoldIcon,
            duotone: AirplayDuotoneIcon,
            fill: AirplayFillIcon,
            light: AirplayLightIcon,
            regular: AirplayRegularIcon,
            thin: AirplayThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
