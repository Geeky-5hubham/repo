export default function json2html(data) {
    // Get all unique keys in the data array to form the table headers
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Start building the HTML string
    let html = `<table data-user="shubhamsinha044@gmail.com">\n  <thead>\n    <tr>`;
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += `</tr>\n  </thead>\n  <tbody>\n`;
  
    // Add table rows for each data item
    data.forEach(item => {
      html += `    <tr>`;
      headers.forEach(header => {
        html += `<td>${item[header] || ''}</td>`;
      });
      html += `</tr>\n`;
    });
  
    html += `  </tbody>\n</table>`;
    return html;
  }
  