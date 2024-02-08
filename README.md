# Pheidippides: Email Markup Preprocessor

Pheidippides is a versatile email markup preprocessor designed to streamline email template development, tailored for personal utilization in work environments. 

## Key Features

Pheidippides enhances HTML-email development by introducing new functionalities to the standard HTML specifications:

### Doctype Modification
Automatically adjusts the document's doctype to `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`, optimizing it specifically for email rendering.

### To Outlook
To enhance compatibility and optimize HTML code for Microsoft Outlook, the following features are utilized:

1. **xmlns:v="urn:schemas-microsoft-com:vml":**
   This attribute facilitates the Vector Markup Language (VML) in Microsoft Outlook, allowing the inclusion of vector graphics elements such as shapes and lines. It's particularly beneficial for enriching graphical content within emails, especially when targeting older versions of Outlook.

2. **xmlns:o="urn:schemas-microsoft-com:office:office":**
   This attribute caters to Office-specific functionalities within HTML emails. It encompasses metadata and properties such as document title or author, ensuring consistency and compatibility with Microsoft Office applications. Its primary purpose lies in maintaining uniformity when rendering HTML emails in Outlook.

3. **meta http-equiv="X-UA-Compatible" content="IE=edge":**
   This meta tag mandates Internet Explorer to utilize its latest available rendering engine. By doing so, it promotes compatibility and ensures consistent rendering across different versions of the browser.

4. **meta http-equiv="Content-Type" content="text/html; charset=utf-8":**
   This meta tag specifies the character encoding of the HTML document as UTF-8. Ensuring proper display of international characters and symbols, it guarantees seamless readability across various platforms and devices.

Sure, here's the code logic translated into text for a README:

### Tag Specifications

This script is designed to optimize HTML tags for compatibility and styling consistency across different email clients. Below are the specifications for various tags:

- **Body Tag (`<body>`):**
  - Set margins, padding, and ensure minimum width for consistent layout.

- **Table Tag (`<table>`):**
  - Remove border, cellspacing, and cellpadding attributes.
  - Assign a role of presentation for accessibility.

- **Paragraph Tag (`<p>`):**
  - Reset margins and padding to zero.
  - Inherit color, font size, font style, and font weight.

- **Anchor Tag (`<a>`):**
  - Remove padding.
  - Remove underline decoration.
  - Inherit color and font size.
  - Open links in a new tab (`target="_blank"`).

- **Image Tag (`<img>`):**
  - Reset margins and padding to zero.
  - Ensure images span the full width of their containers.
  - Improve image rendering quality.
  - Set height to auto.
  - Remove borders.
  - Adjust line height and ensure block-level display.

- **Heading Tags (`<h1>` to `<h6>`):**
  - Reset margins and padding to zero.
  - Inherit color, font size, font style, and font weight.

### Preheader Tag
Introduces `<preheader></preheader>` to display supplementary information beside the subject line in email clients.

### #nullstyle{}
By incorporating this optional block of CSS into the style tag, you establish standard null styles for various elements:

**Images:**
Images will have no borders, ensuring they seamlessly integrate into the layout. Their interpolation mode is set to bicubic for smoother rendering, and their maximum width is restricted to 100% of their container to maintain responsiveness.

**Tables:**
Tables have their default spacing between cells removed to ensure a consistent layout. Padding is reset, and widths are set to 100% to ensure tables adapt well to different screen sizes.

**Table Cells:**
Padding for table cells is reset, ensuring consistent spacing within table layouts.

**Links:**
Links within Outlook emails and elsewhere have their padding removed and text decoration set to none for a cleaner appearance.

**Hover Effects on Links:**
Hover effects on links are disabled, ensuring consistent styling regardless of user interaction.

**Headings and Paragraphs:**
Margins and padding are reset for headings (h1, h2, h3) and paragraphs (p), and their font size and weight are set to inherit, maintaining consistency with surrounding text.

You can add your own custom CSS properties within the curly braces to further **customize the nullstyles** as needed.

