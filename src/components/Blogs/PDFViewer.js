import { useEffect, useRef, useState } from "react";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
    const canvasRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("PDF URL is ", pdfUrl)
        const renderPDF = async () => {
            if (!pdfUrl) return;
            try {
                setIsLoading(true);

                const pdf = await getDocument(pdfUrl).promise;
                const page = await pdf.getPage(1);

                const canvas = canvasRef.current;
                const context = canvas.getContext("2d");
                const viewport = page.getViewport({ scale: 1.5 });

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                await page.render({ canvasContext: context, viewport }).promise; // Render the page on the canvas
                setIsLoading(false);
            } catch (error) {
                console.error("Error rendering PDF:", error);
                setIsLoading(false);
            }
        };

        renderPDF();
    }, [pdfUrl]);

    return (
        <div>
            {isLoading ? (
                <div>Loading PDF...</div>
            ) : (
                <canvas ref={canvasRef} style={{ width: "100%" }}></canvas>
            )}
        </div>
    );
};

export default PDFViewer;
