import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WaveSineBoldIcon } from "../bold";
        import { WaveSineDuotoneIcon } from "../duotone";
        import { WaveSineFillIcon } from "../fill";
        import { WaveSineLightIcon } from "../light";
        import { WaveSineRegularIcon } from "../regular";
        import { WaveSineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const WaveSineIcon = memo(function WaveSine(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: WaveSineBoldIcon,
            duotone: WaveSineDuotoneIcon,
            fill: WaveSineFillIcon,
            light: WaveSineLightIcon,
            regular: WaveSineRegularIcon,
            thin: WaveSineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
