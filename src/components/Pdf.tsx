"use client";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { flattenObject } from '../utils/fileUtils';
const big = 14
const mid = 8.3
const small = 7
const lowMid = 8
// Create styles
const styles = StyleSheet.create({
    page: {
        padding: '20px'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexCol: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
    },
    containerTopLeft: {
        gap: "24px",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        width: "310px"
    },
    title: {
        fontSize: big,
    },
    mid: {
        fontSize: mid,
        fontWeight: 500,
        marginBottom: "1px"
    },
    lowMid: {
        fontSize: lowMid
    },
    small: {
        fontSize: small
    },
    //header mid
    middle: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: "20px",
        gap: "10px"
    },
    titleHeaderMid: {
        fontSize: big,
        marginLeft: "40px"
    },
    containerMidLow: {
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
    },
    containerMidLowHalf: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    //header right
    containerTopRight: {
        gap: "16px",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        marginLeft: "80px"
    }
    // mid top


});

// Create Document Component
const MyDocument = ({ data }: { data: any }) => {
    const processed = flattenObject(data?.content)
    const topLeft = <View style={styles.containerTopLeft}>
        <View style={styles.flexCol}>
            <Text style={styles.mid}>VANZATOR</Text>
            <Text style={styles.small}>Identificatorul TVA</Text>
            <Text style={styles.small}>Nume</Text>
            <Text style={styles.small}>Nr. inregistrare</Text>
            <Text style={styles.small}>Informatii juridice</Text>
            <Text style={styles.small}>Strada</Text>
            <Text style={styles.small}>Oras</Text>
            <Text style={styles.small}>Cod</Text>
            <Text style={styles.small}>Regiune</Text>
            <Text style={styles.small}>Tara</Text>
            <Text style={styles.small}>Adresa</Text>
            <Text style={styles.small}>Persoana de contact</Text>
            <Text style={styles.small}>Telefon</Text>
            <Text style={styles.small}>E-mail</Text>

        </View>
        <View style={styles.flexCol}>
            <Text style={styles.mid}>{" "}</Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingSupplierParty.cac:Party.cac:PartyTaxScheme.cbc:CompanyID.content"]}</Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingSupplierParty.cac:Party.cac:PartyLegalEntity.cbc:RegistrationName.content"]}</Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingSupplierParty.cac:Party.cac:PartyLegalEntity.cbc:CompanyID.content"]}</Text>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingSupplierParty.cac:Party.cac:PostalAddress.cbc:StreetName.content"]}</Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingSupplierParty.cac:Party.cac:PostalAddress.cbc:CityName.content"]}</Text>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingSupplierParty.cac:Party.cac:PostalAddress.cbc:CountrySubentity.content"]}</Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingSupplierParty.cac:Party.cac:PostalAddress.cac:Country.cbc:IdentificationCode.content"]}</Text>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}> </Text>

        </View>
    </View>
    const topMid = <View style={styles.middle}>
        <Text style={styles.titleHeaderMid}>RO eFactura</Text>
        <View style={styles.containerMidLow}>
            <View style={styles.containerMidLowHalf}>
                <Text style={styles.lowMid}>Nr. Factura</Text>
                <Text style={styles.lowMid}>Codul tipului</Text>
                <Text style={styles.lowMid}>Data emitere</Text>
                <Text style={styles.lowMid}>Data scadenta</Text>
                <Text style={styles.lowMid}>Moneda facturii</Text>
            </View>
            <View style={styles.containerMidLowHalf}>
                <Text style={styles.lowMid}>{processed["Invoice.cbc:ID.content"]}</Text>
                <Text style={styles.lowMid}>{processed["Invoice.cbc:InvoiceTypeCode.content"]}</Text>
                <Text style={styles.lowMid}>{processed["Invoice.cbc:IssueDate.content"]}</Text>
                <Text style={styles.lowMid}>{processed["Invoice.cbc:DueDate.content"]}</Text>
                <Text style={styles.lowMid}>{processed["Invoice.cbc:DocumentCurrencyCode.content"]}</Text>
            </View>
        </View>
    </View>
    const topRight = <View style={styles.containerTopRight}>
        <View style={styles.flexCol}>
            <Text style={styles.mid}>CUMPARATOR</Text>
            <Text style={styles.small}>Strada</Text>
            <Text style={styles.small}>Oras</Text>
            <Text style={styles.small}>Cod</Text>
            <Text style={styles.small}>Regiune</Text>
            <Text style={styles.small}>Tara</Text>
            <Text style={styles.small}>Identificator</Text>
            <Text style={styles.small}>Nume</Text>
            <Text style={styles.small}>Nr. inregistrare</Text>
            <Text style={styles.small}>Adresa electronica</Text>
            <Text style={styles.small}>Persoana de contact</Text>
            <Text style={styles.small}>Telefon</Text>
            <Text style={styles.small}>E-mail</Text>

        </View>
        <Text style={styles.small}> </Text>
        <View style={styles.flexCol}>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingCustomerParty.cac:Party.cac:PostalAddress.cbc:StreetName.content"]}</Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingCustomerParty.cac:Party.cac:PostalAddress.cbc:CityName.content"]}</Text>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingCustomerParty.cac:Party.cac:PostalAddress.cbc:CountrySubentity.content"]}</Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingCustomerParty.cac:Party.cac:PostalAddress.cac:Country.cbc:IdentificationCode.content"]}</Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingCustomerParty.cac:Party.cac:PartyTaxScheme.cbc:CompanyID.content"]}</Text>
            <Text style={styles.small}>{processed["Invoice.cac:AccountingCustomerParty.cac:Party.cac:PartyLegalEntity.cbc:RegistrationName.content"]}</Text>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}> </Text>
            <Text style={styles.small}> </Text>


        </View>
    </View>
    return (
        <Document>
            <Page size={'A4'} style={styles.page} orientation='landscape'>
                {/* Header */}
                <View style={styles.header}>
                    {topLeft}
                    {topMid}
                    {topRight}
                </View>
            </Page>
        </Document>
    )
};

export default MyDocument;
