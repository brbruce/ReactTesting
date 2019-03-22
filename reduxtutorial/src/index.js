import React from 'react';
import ReactDOM from "react-dom";
import FormContainer from "./js/components/container/FormContainer.jsx";

// Attache FormContainer component to the 'create-article-form' element in index.html
// NOTE: This was originally in the FormContainer.jsx file, but I moved it here to match the 'create-react-app' style.
ReactDOM.render(<FormContainer />, document.getElementById("create-article-form"));