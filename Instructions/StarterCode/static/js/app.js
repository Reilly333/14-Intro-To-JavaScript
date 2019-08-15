var tbody = d3.select("tbody");
var inputField = d3.select('#inputField')
var ufoData = data;

function renderTable(filter) {
    tbody.html('');
    data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    if(filter !== undefined && filter.toString().trim() != ''){
        var origSearchTerms = Object.values(ufoSighting);
        var lowerCaseSearchTermsBlob = origSearchTerms.toString().toLowerCase();
        if (lowerCaseSearchTermsBlob.indexOf(filter.toLowerCase()) != -1) {
                Object.entries(ufoSighting).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
        }
    }else {
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    }

  });
};

function handleClick() {
    var inputFilter = inputField.node().value.trim();
    renderTable(inputFilter);
}
renderTable();