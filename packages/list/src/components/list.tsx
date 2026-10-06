import { memo, useCallback } from "react";

import type { ListEntryProps, ListProps } from "../types";
import { ListEntry } from "./list-entry";
import { List } from "./list-parts";

export const ListComponent = memo(function ListComponent({
  children,
  items,
  ...props
}: ListProps) {
  const renderItem = useCallback(
    (item: ListEntryProps) => <ListEntry key={item.id} {...item} />,
    [],
  );

  return (
    <List.Root {...props}>
      {items ? items.map(renderItem) : null}
      {children}
    </List.Root>
  );
});
