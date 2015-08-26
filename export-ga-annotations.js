// Jam this into console when the annotations tab is fully expanded.
// The annotations will be in your clipboard in JSON format.

var values = [];
$( '#AnnotationsDrawer_list tbody:nth-child(2) tr' ).each( function( index, element ){
  values.push({
    date: $( this ).find('td:nth-child(2)').text(),
    annotation: $( this ).find('td:nth-child(3) span:nth-child(2)').text()
  });
});
copy(values)
