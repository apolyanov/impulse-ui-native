import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GitPullRequestBoldIcon } from "../bold";
        import { GitPullRequestDuotoneIcon } from "../duotone";
        import { GitPullRequestFillIcon } from "../fill";
        import { GitPullRequestLightIcon } from "../light";
        import { GitPullRequestRegularIcon } from "../regular";
        import { GitPullRequestThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GitPullRequestIcon = memo(function GitPullRequest(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GitPullRequestBoldIcon,
            duotone: GitPullRequestDuotoneIcon,
            fill: GitPullRequestFillIcon,
            light: GitPullRequestLightIcon,
            regular: GitPullRequestRegularIcon,
            thin: GitPullRequestThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
