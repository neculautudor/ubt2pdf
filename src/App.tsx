import { useState } from "react"
import classes from "./App.module.css"
import MyDocument from "./components/Pdf"
import { getFiles, parseFiles } from "./utils/fileUtils"
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer"
function App() {
    const [filesData, setFilesData] = useState<any[] | null>(null)
    let urll: string | null = "";
    const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesData = await getFiles(e.target.files)
            const parsedData = await parseFiles(filesData)
            setFilesData(parsedData)
        }
    }
    const pdf = <MyDocument data={filesData?.[0]} />
    // setTimeout(() => {
    //     document.getElementById("clickme")?.click()
    // }, 500)
    return (
        <div className={classes.app}>
            <main className={classes.content}>
                <input id="file" type="file" onChange={onFileUpload} className={classes.input} multiple />
                <PDFDownloadLink
                    document={pdf}
                    fileName="somename.pdf"
                >
                    Download now!
                </PDFDownloadLink>
                <BlobProvider document={pdf}>
                    {({ blob, url, loading, error }) => {
                        if (loading) return <div>Loading document...</div>;
                        if (error) return <div>Error loading document</div>;
                        urll = url;
                        return (
                            <a href={urll ?? ""} target="_blank" rel="noopener noreferrer" id="clickme">
                                Open PDF in a new tab
                            </a>
                        );
                    }}
                </BlobProvider>
            </main>
        </div>
    );
}

export default App;


