// Chart 1
let data1 = [14, 12, 8];
let labels1 = ['Transmasc', 'Transfem', 'nonbinary'];
let colors2= ['#96B6C5', '#ADC4CE', '#94A684', '#E4E4D0'];
      

let options1 = {
  type: 'pie',
  data: {
    labels: labels1,
    datasets: [
      {
        backgroundColor:colors2,
        data: data1,
      },
    ],
  },
  options:{
    title:{
      display:true,
      text:"Percentage of Discrimination"
    }
    
 
  }
};

Chart.defaults.global.defaultFontFamily = '"Helvetica Neue", "Helvetica", "Arial", sans-serif';
Chart.defaults.global.defaultFontColor = 'rgb(100, 100, 100)';
Chart.defaults.global.defaultFontSize = 16;

let chart1 = new Chart(
  document.getElementById('chart1'), 
  options1
);

// Chart 2
let dataCurrent = [83, 16, 20];
let dataProjected = [60, 6, 14];
let labels2 = ['Transmasc', 'Transfem', 'Non-binary'];

let options2 = {
  type: 'bar',
  data: {
    labels: labels2,
    datasets: [
      {
        data: dataCurrent,
        label: 'Opening up to gender clinic',
        backgroundColor: '#96B6C5',
        borderWidth: 1,
      },
      {
        data: dataProjected,
        label: 'Avoid opening up about identity',
        backgroundColor:  '#E4E4D0',
        
        borderWidth: 1,
      },
    ],
  },
  options:{
    title:{
      display:true,
      text:"Avoidance of Care %"
    }
    
 
  }
};

let chart2 = new Chart(
  document.getElementById('chart2'), 
  options2
);

// Chart 3
let dataCurrentWellBeing = [78, 62, 41, 51];
let colors = ['#96B6C5', '#ADC4CE', '#94A684', '#E4E4D0'];
let labels3 = ['Mental Well being', 'Spiritual Well Being', 'Financial Well Being', 'Physical Well Being'];

let options3 = {
  type: 'polarArea',
  data: {
    labels: labels3,
    datasets: [
      {
        data: dataCurrentWellBeing,
        backgroundColor: colors,
        
        borderWidth: 1,
      },
    ],
    
  },
  options:{
    title:{
      display:true,
      text:"Well Being Compromised"
    }
    
 
  }

}

let chart3 = new Chart(
  document.getElementById('chart3'), 
  options3
);

// Chart 4
let dataBeforeTherapy = [33, 46, 29, 24];
let dataAfterTherapy = [51, 48, 22, 8];
let labels4 = ['Not Elevated', 'Mild', 'Moderate', 'Severe'];

let options4 = {
  type: 'bar',
  data: {
    labels: labels4,
    datasets: [
      {
        data: dataBeforeTherapy,
        label: 'Before Therapy',
        backgroundColor:  '#94A684',
        
        borderWidth: 1,
      },
      {
        data: dataAfterTherapy,
        label: 'After Therapy',
        backgroundColor: '#E4E4D0',
       
        borderWidth: 1,
      },
    ],
  },
  options:{
    title:{
      display:true,
      text:"Mental Health Before/After HRT"
    }
    
 
  }
};

let chart4 = new Chart(
  document.getElementById('chart4'), 
  options4
);