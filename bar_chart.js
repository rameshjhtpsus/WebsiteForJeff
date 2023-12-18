
// A list of the data we want to display
let data = [ 14, 12,8 ];



// dictionaary
// contains a key and a 
// needs commas inbetween them

// Labels, also a list with one item per data point above
let labels = [ 'Transmasc', 'Transfem', 'nonbinary' ];

// All of our settings (and the data!) go in here (we'll add lots more options to this section in upcoming examples)
let options = {
  type:'bar',
  data:{
    labels: labels,
    datasets:[
      {
        data:data

      }
    ]
  }
  
}

// With all our options complete, we can create the chart!

let chart = new Chart(document.getElementById('chart1'), options);
