import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GitMergeBoldIcon } from "../bold";
        import { GitMergeDuotoneIcon } from "../duotone";
        import { GitMergeFillIcon } from "../fill";
        import { GitMergeLightIcon } from "../light";
        import { GitMergeRegularIcon } from "../regular";
        import { GitMergeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GitMergeIcon = memo(function GitMerge(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GitMergeBoldIcon,
            duotone: GitMergeDuotoneIcon,
            fill: GitMergeFillIcon,
            light: GitMergeLightIcon,
            regular: GitMergeRegularIcon,
            thin: GitMergeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
