// ============================== //
// resume.jsx - ReactJS HTML File //
// --- Created by Alex Montes --- //
// ============================== //

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from '../../../documents/resume.pdf';


function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="../../../documents/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default MyApp;
/*
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => (
  <Document>
    samplePDF
  </Document>
);

export default MyDocument;



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