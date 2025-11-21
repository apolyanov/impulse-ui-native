import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BugDroidBoldIcon } from "../bold";
        import { BugDroidDuotoneIcon } from "../duotone";
        import { BugDroidFillIcon } from "../fill";
        import { BugDroidLightIcon } from "../light";
        import { BugDroidRegularIcon } from "../regular";
        import { BugDroidThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BugDroidIcon = memo(function BugDroid(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BugDroidBoldIcon,
            duotone: BugDroidDuotoneIcon,
            fill: BugDroidFillIcon,
            light: BugDroidLightIcon,
            regular: BugDroidRegularIcon,
            thin: BugDroidThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
