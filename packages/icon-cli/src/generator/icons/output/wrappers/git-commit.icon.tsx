import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GitCommitBoldIcon } from "../bold";
        import { GitCommitDuotoneIcon } from "../duotone";
        import { GitCommitFillIcon } from "../fill";
        import { GitCommitLightIcon } from "../light";
        import { GitCommitRegularIcon } from "../regular";
        import { GitCommitThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GitCommitIcon = memo(function GitCommit(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GitCommitBoldIcon,
            duotone: GitCommitDuotoneIcon,
            fill: GitCommitFillIcon,
            light: GitCommitLightIcon,
            regular: GitCommitRegularIcon,
            thin: GitCommitThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
