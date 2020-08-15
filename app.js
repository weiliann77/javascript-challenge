// from data.js
var tableData = data;
var button1 = d3.select("#filter-btn");
// YOUR CODE HERE!


var date1 = data.map(data1 => data1.datetime);
var city1 = data.map(data1 => data1.city);
var state1 = data.map(data1 => data1.state);
var country1 = data.map(data1 => data1.country);
var shape1 = data.map(data1 => data1.shape);
var duration1 = data.map(data1 => data1.durationMinutes);
var comments1 = data.map(data1 => data1.comments);


function buildTable(date, city, state, country, shape,duration, comments) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    let trow;

    for (let i = 0; i < date.length; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(date[i]);
      trow.append("td").text(city[i]);
      trow.append("td").text(state[i]);
      trow.append("td").text(country[i]);
      trow.append("td").text(shape[i]);
      trow.append("td").text(duration[i]);
      trow.append("td").text(comments[i]);
    }

  };


  button1.on("click", function() {
    var text = d3.select("#datetime");
    var text2 = text.property('value')
   
    var data2 = data.filter(filterdate);
    var date2 = data2.map(data1 => data1.datetime);
    var city2 = data2.map(data1 => data1.city);
    var state2 = data2.map(data1 => data1.state);
    var country2 = data2.map(data1 => data1.country);
    var shape2 = data2.map(data1 => data1.shape);
    var duration2 = data2.map(data1 => data1.durationMinutes);
    var comments2 = data2.map(data1 => data1.comments);
    var table2 = d3.select("#ufo-table");
    var tbody2 = table2.select("tbody");
    tbody2.html("");

    if (text2 ===""){
        buildTable(date1,city1,state1,country1,shape1,duration1,comments1);

    }
    else {
   buildTable(date2,city2,state2,country2,shape2,duration2,comments2);
    };
    function filterdate(d){
       
        return d.datetime === text2;
      };
 
  });





  buildTable(date1,city1,state1,country1,shape1,duration1,comments1);