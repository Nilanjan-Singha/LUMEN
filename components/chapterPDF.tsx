import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import { MarkdownToPDF } from "./MarkdownToPDF";

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 20,
    color: "#555",
  },
});

function removeFirstHeading(markdown: string) {
  return markdown.replace(/^#{1,2}\s.+\n+/, "");
}

export function ChapterPDF({
  space,
  chapter,
  content,
}: {
  space: any;
  chapter: any;
  content: string;
}) {
  const cleanedContent = removeFirstHeading(content);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Main Title */}
        <Text style={styles.title}>{chapter.chapter}</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>{chapter.topic}</Text>

        {/* Markdown body (without duplicated heading) */}
        <MarkdownToPDF markdown={cleanedContent} />
      </Page>
    </Document>
  );
}
