import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GitForkBoldIcon } from "../bold";
        import { GitForkDuotoneIcon } from "../duotone";
        import { GitForkFillIcon } from "../fill";
        import { GitForkLightIcon } from "../light";
        import { GitForkRegularIcon } from "../regular";
        import { GitForkThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GitForkIcon = memo(function GitFork(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GitForkBoldIcon,
            duotone: GitForkDuotoneIcon,
            fill: GitForkFillIcon,
            light: GitForkLightIcon,
            regular: GitForkRegularIcon,
            thin: GitForkThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
