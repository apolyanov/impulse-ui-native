import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BugBeetleBoldIcon } from "../bold";
        import { BugBeetleDuotoneIcon } from "../duotone";
        import { BugBeetleFillIcon } from "../fill";
        import { BugBeetleLightIcon } from "../light";
        import { BugBeetleRegularIcon } from "../regular";
        import { BugBeetleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BugBeetleIcon = memo(function BugBeetle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BugBeetleBoldIcon,
            duotone: BugBeetleDuotoneIcon,
            fill: BugBeetleFillIcon,
            light: BugBeetleLightIcon,
            regular: BugBeetleRegularIcon,
            thin: BugBeetleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
