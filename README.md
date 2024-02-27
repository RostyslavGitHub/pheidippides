# Pheidippides: Email Markup Preprocessor

Pheidippides is a preprocessor to increase the speed of creating professional HTML emails.

## Key Features

### Doctype Modification
Automatically adjusts the `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">` doctype to optimize HTML for email rendering.

### For Outlook
To enhance compatibility and optimize HTML code for Microsoft Outlook, the following features are utilized:

- `xmlns:v="urn:schemas-microsoft-com:vml"`: Enables Vector Markup Language (VML) support for graphical content.
- `xmlns:o="urn:schemas-microsoft-com:office:office"`: Provides Office-specific functionalities for consistent rendering.
- `meta http-equiv="X-UA-Compatible" content="IE=edge"`: Ensures consistent rendering across different versions of Internet Explorer.
- `meta http-equiv="Content-Type" content="text/html; charset=utf-8"`: Specifies UTF-8 character encoding for international character support.

### Tag Specifications
Optimizes HTML tags for compatibility and styling consistency across email clients:

- **Body Tag (`<body>`):** Sets margins, padding, and minimum width 100% for consistent layout.
- **Table Tag (`<table>`):** Removes border and assigns a role of presentation for accessibility.
- **Paragraph Tag (`<p>`):** Resets margins and padding, inherits color and font properties.
- **Anchor Tag (`<a>`):** Removes padding and underline decoration, opens links in a new tab.
- **Image Tag (`<img>`):** Resets margins and padding, removes border, adjusts image display properties.
- **Heading Tags (`<h1>` to `<h6>`):** Resets margins, padding and font properties.


