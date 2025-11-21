import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BugBoldIcon } from "../bold";
        import { BugDuotoneIcon } from "../duotone";
        import { BugFillIcon } from "../fill";
        import { BugLightIcon } from "../light";
        import { BugRegularIcon } from "../regular";
        import { BugThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BugIcon = memo(function Bug(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BugBoldIcon,
            duotone: BugDuotoneIcon,
            fill: BugFillIcon,
            light: BugLightIcon,
            regular: BugRegularIcon,
            thin: BugThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
