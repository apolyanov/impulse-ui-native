import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { RepeatOnceBoldIcon } from "../bold";
        import { RepeatOnceDuotoneIcon } from "../duotone";
        import { RepeatOnceFillIcon } from "../fill";
        import { RepeatOnceLightIcon } from "../light";
        import { RepeatOnceRegularIcon } from "../regular";
        import { RepeatOnceThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const RepeatOnceIcon = memo(function RepeatOnce(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: RepeatOnceBoldIcon,
            duotone: RepeatOnceDuotoneIcon,
            fill: RepeatOnceFillIcon,
            light: RepeatOnceLightIcon,
            regular: RepeatOnceRegularIcon,
            thin: RepeatOnceThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
