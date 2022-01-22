/* import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from '../../../documents/resume.pdf';

export default function Test() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <div>
        <Document
          file="somefile.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );

  /*

  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
  );
}


import React from "react";
import "./home.css"

import { Card } from '@material-ui/core';

function homePage (props) {
    return(
        <div className="homeCSS">
            <header className="resumeHeader homeContainer">
                <Card className= "homeCard">

                </Card>
            </header>
        </div>
    )
}


export default homePage;

*/