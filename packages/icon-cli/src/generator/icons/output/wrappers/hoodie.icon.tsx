import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HoodieBoldIcon } from "../bold";
        import { HoodieDuotoneIcon } from "../duotone";
        import { HoodieFillIcon } from "../fill";
        import { HoodieLightIcon } from "../light";
        import { HoodieRegularIcon } from "../regular";
        import { HoodieThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HoodieIcon = memo(function Hoodie(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HoodieBoldIcon,
            duotone: HoodieDuotoneIcon,
            fill: HoodieFillIcon,
            light: HoodieLightIcon,
            regular: HoodieRegularIcon,
            thin: HoodieThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
