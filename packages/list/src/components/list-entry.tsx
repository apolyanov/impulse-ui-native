import { memo, useMemo } from "react";

import { Typography } from "@impulse-ui-native/primitives";

import type { ListEntryProps } from "../types";
import { List } from "./list-parts";

export const ListEntry = memo(function ListEntry({
  id,
  children,
  title,
  description,
  leading,
  trailing,
  onPress,
  disabled,
  ...props
}: ListEntryProps) {
  const Row = onPress ? List.Pressable : List.Item;
  const pressableProps = useMemo(
    () => (onPress ? { onPress, disabled } : {}),
    [disabled, onPress],
  );

  const hasLeading = leading !== null && leading !== undefined;
  const hasTitle = title !== null && title !== undefined;
  const hasDescription = description !== null && description !== undefined;
  const hasTrailing = trailing !== null && trailing !== undefined;

  return (
    <Row {...props} nativeID={props.nativeID ?? id} {...pressableProps}>
      {hasLeading ? <List.Leading>{leading}</List.Leading> : null}
      <List.Content>
        {hasTitle ? <Typography.Title6>{title}</Typography.Title6> : null}
        {hasDescription ? (
          <Typography.BodySmall>{description}</Typography.BodySmall>
        ) : null}
        {children}
      </List.Content>
      {hasTrailing ? <List.Trailing>{trailing}</List.Trailing> : null}
    </Row>
  );
});
