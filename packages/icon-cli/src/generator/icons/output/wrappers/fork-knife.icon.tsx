import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ForkKnifeBoldIcon } from "../bold";
        import { ForkKnifeDuotoneIcon } from "../duotone";
        import { ForkKnifeFillIcon } from "../fill";
        import { ForkKnifeLightIcon } from "../light";
        import { ForkKnifeRegularIcon } from "../regular";
        import { ForkKnifeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ForkKnifeIcon = memo(function ForkKnife(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ForkKnifeBoldIcon,
            duotone: ForkKnifeDuotoneIcon,
            fill: ForkKnifeFillIcon,
            light: ForkKnifeLightIcon,
            regular: ForkKnifeRegularIcon,
            thin: ForkKnifeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
