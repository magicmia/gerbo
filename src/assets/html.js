import React from "react";
import { render } from "react-dom";

const htmlString =
  "<!DOCTYPE html><html><body bgcolor='#E6E6FA'><h1>Hello world!</h1><p><a href='https://www.w3schools.com'>Visit W3Schools.com!</a></p><p>The bgcolor attribute is not supported in HTML5. Use CSS instead.</p></body></html>";

const HTML = () => <div dangerouslySetInnerHTML={{ __html: htmlString }} />;

render(<HTML />, document.getElementById("root"));

export default HTML;