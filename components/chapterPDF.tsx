// components/ChapterPDF.tsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    lineHeight: 1.6,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 20,
    color: "#555",
  },
  paragraph: {
    marginBottom: 10,
  },
});

export function ChapterPDF({
  space,
  chapter,
  content,
}: {
  space: any;
  chapter: any;
  content: string;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{chapter.chapter}</Text>
        <Text style={styles.subtitle}>{chapter.topic}</Text>

        {content.split("\n\n").map((p, i) => (
          <Text key={i} style={styles.paragraph}>
            {p}
          </Text>
        ))}
      </Page>
    </Document>
  );
}
