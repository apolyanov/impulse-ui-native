import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WavesBoldIcon } from "../bold";
        import { WavesDuotoneIcon } from "../duotone";
        import { WavesFillIcon } from "../fill";
        import { WavesLightIcon } from "../light";
        import { WavesRegularIcon } from "../regular";
        import { WavesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const WavesIcon = memo(function Waves(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: WavesBoldIcon,
            duotone: WavesDuotoneIcon,
            fill: WavesFillIcon,
            light: WavesLightIcon,
            regular: WavesRegularIcon,
            thin: WavesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
