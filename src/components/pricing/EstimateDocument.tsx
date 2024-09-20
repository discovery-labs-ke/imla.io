import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer"
import DateFormatter from "../blog/DateFormatter.astro"

const styles = StyleSheet.create({
  page: {
    display: "flex",
    gap: 30,
    flexDirection: "column",
    padding: 40,
    fontSize: 12,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },

  tableRowStyle: {
    flexDirection: "row",
  },
  firstTableColHeaderStyle: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomColor: "#000",
    borderWidth: 1,
    backgroundColor: "#bdbdbd",
  },
  tableColHeaderStyle: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    backgroundColor: "#bdbdbd",
  },
  firstTableColStyle: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    borderTopWidth: 0,
  },
  tableColStyle: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeaderStyle: {
    margin: 4,
    fontSize: 12,
    fontWeight: "bold",
  },
  tableCellStyle: {
    margin: 5,
    height: 50,
    display: "flex",
    justifyContent: "space-between",
  },
  orangeLineStyle: {
    backgroundColor: "orange",
    height: 3,
    width: "100%",
  },
})

const TableHeader = () => {
  return (
    <View style={styles.tableRowStyle} fixed>
      <View style={styles.firstTableColHeaderStyle}>
        <Text style={styles.tableCellHeaderStyle}>DESCRIPTION</Text>
      </View>

      <View style={styles.tableColHeaderStyle}>
        <Text style={styles.tableCellHeaderStyle}>AMOUNT (KES)</Text>
      </View>
    </View>
  )
}

const TableRow = () => {
  return (
    <View style={styles.tableRowStyle}>
      <View style={styles.firstTableColStyle}>
        <Text style={styles.tableCellStyle}>500 Hours</Text>
        <Text
          style={{
            margin: 5,
          }}
        >
          TOTAL
        </Text>
      </View>

      <View style={styles.tableColStyle}>
        <Text style={styles.tableCellStyle}>2.00</Text>
        <Text
          style={{
            margin: 5,
          }}
        >
          50,000
        </Text>
      </View>
    </View>
  )
}

export default function EstimateDocument() {
  const currentDate = new Date()
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(currentDate)

  return (
    <PDFViewer style={{ width: "100%", height: "98vh" }}>
      <Document>
        <Page size={"A4"} style={styles.page}>
          <View
            style={{
              gap: 14,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image src="/images/logo.png" style={{ width: 100 }} />
              <Image src="/images/labs-logo.png" style={{ width: 150 }} />
            </View>
          </View>
          <View
            style={{
              gap: 5,
            }}
          >
            <Text>{formattedDate}</Text>
            <Text style={styles.title}>Quote</Text>
          </View>

          <View>
            <TableHeader />
            <TableRow />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 20,
              width: "100vw",
            }}
          >
            <View style={styles.orangeLineStyle}></View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                padding: 10,
              }}
            >
              <View style={{ gap: 2 }}>
                <Text>DISCOVERY LABS LIMITED</Text>
                <Text>TEL: +254 720 572303</Text>
              </View>
              <View style={{ gap: 2 }}>
                <Text>P.O. BOX 79671-00200 NAIROBI</Text>
                <Text>43 DOVE CLOSE, KUWINDA ROAD, KAREN </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
