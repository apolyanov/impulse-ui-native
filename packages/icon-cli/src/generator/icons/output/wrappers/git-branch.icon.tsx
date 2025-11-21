import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GitBranchBoldIcon } from "../bold";
        import { GitBranchDuotoneIcon } from "../duotone";
        import { GitBranchFillIcon } from "../fill";
        import { GitBranchLightIcon } from "../light";
        import { GitBranchRegularIcon } from "../regular";
        import { GitBranchThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GitBranchIcon = memo(function GitBranch(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GitBranchBoldIcon,
            duotone: GitBranchDuotoneIcon,
            fill: GitBranchFillIcon,
            light: GitBranchLightIcon,
            regular: GitBranchRegularIcon,
            thin: GitBranchThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
