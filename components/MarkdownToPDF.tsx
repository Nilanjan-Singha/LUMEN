import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { remark } from "remark";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";

const styles = StyleSheet.create({
  h1: { fontSize: 20, marginBottom: 10, fontWeight: "bold" },
  h2: { fontSize: 16, marginBottom: 8, fontWeight: "bold" },
  h3: { fontSize: 14, marginBottom: 6, fontWeight: "bold" },

  p: { fontSize: 11, marginBottom: 8, lineHeight: 1.6 },

  codeBlock: {
    fontFamily: "Courier",
    fontSize: 10,
    backgroundColor: "#f5f5f5",
    padding: 8,
    marginVertical: 6,
  },

  inlineCode: {
    fontFamily: "Courier",
    backgroundColor: "#eee",
    fontSize: 10,
  },

  li: { marginBottom: 4 },
});

export function MarkdownToPDF({ markdown }: { markdown: string }) {
  const tree = remark().use(remarkParse).parse(markdown);

const elements: React.ReactElement[] = [];

  visit(tree, (node: any) => {
    switch (node.type) {
      case "heading":
        elements.push(
          <Text
            key={elements.length}
            style={styles[`h${node.depth}` as "h1" | "h2" | "h3"]}
          >
            {node.children.map((c: any) => c.value).join("")}
          </Text>
        );
        break;

      case "paragraph":
        elements.push(
          <Text key={elements.length} style={styles.p}>
            {node.children.map((c: any) => c.value || "").join("")}
          </Text>
        );
        break;

      case "code":
        elements.push(
          <View key={elements.length} style={styles.codeBlock}>
            <Text>{node.value}</Text>
          </View>
        );
        break;

case "list":
  node.children.forEach((item: any) => {
    const text = item.children
      .map((child: any) =>
        child.children?.map((c: any) => c.value).join("")
      )
      .join("");

    elements.push(
      <View
        key={elements.length}
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: 6,
        }}
      >
        {/* Bullet */}
        <Text
          style={{
            width: 12,
            fontSize: 11,
            lineHeight: 1.6,
          }}
        >
          •
        </Text>

        {/* Content */}
        <Text
          style={{
            flex: 1,
            fontSize: 11,
            lineHeight: 1.6,
          }}
        >
          {text}
        </Text>
      </View>
    );
  });
  break;
    }
  });

  return <View>{elements}</View>;
}
