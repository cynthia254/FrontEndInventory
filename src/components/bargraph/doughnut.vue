<template>
  <div class="text-center mb-5">
  <h4 class="" style=" ">TOP SELLING PRODUCTS</h4>
</div>
<div class="" style="width: 40%;margin-left: 100px;">
    <Doughnut :data="data" :options="options" />
 
  </div>
  </template>
  
  <script >
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Doughnut } from 'vue-chartjs'

  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'DughnutChart',
    components: {
      Doughnut
    },
    data() {
       return{
        data:{
  labels: ['Feitian F20', 'Feitian F20FP', 'Feitian 600', 'Feitian F600'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [100, 20, 80, 10]
    }
  ]
},

options : {
  responsive: true,
  maintainAspectRatio: false
}
    }

    }
  }
  </script>