import { ActionPanel, Action, List, Icon } from "@raycast/api";

import { HighlightDetail } from "./HighlightDetail";

export const HighlightsList = ({ item }: { item: Highlight }) => {
  return (
    <List.Item
      title={item.text}
      subtitle={item.note}
      keywords={item.tags.map((tag) => tag.name)}
      accessories={(item.url && [{ text: item.url, icon: Icon.Link }]) || undefined}
      actions={
        <ActionPanel>
          <Action.Push title="Show Details" target={<HighlightDetail item={item} />} />
          <ActionPanel.Section>
            {item.url && <Action.OpenInBrowser title="Open in Browser" url={item.url} />}
            <Action.CopyToClipboard title="Copy Text" content={item.text} shortcut={{ modifiers: ["cmd"], key: "." }} />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
};
