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

  return (
    <Row {...props} nativeID={props.nativeID ?? id} {...pressableProps}>
      {leading !== null && leading !== undefined ? (
        <List.Leading>{leading}</List.Leading>
      ) : null}
      <List.Content>
        {title !== null && title !== undefined ? (
          <Typography.Title6>{title}</Typography.Title6>
        ) : null}
        {description !== null && description !== undefined ? (
          <Typography.BodySmall>{description}</Typography.BodySmall>
        ) : null}
        {children}
      </List.Content>
      {trailing !== null && trailing !== undefined ? (
        <List.Trailing>{trailing}</List.Trailing>
      ) : null}
    </Row>
  );
});
