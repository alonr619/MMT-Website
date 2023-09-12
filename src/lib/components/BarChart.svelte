<script>
    import { Bar } from 'svelte-chartjs';
    import ChartDeferred from 'chartjs-plugin-deferred';
    export let data;
    export let options;
    export let plugins;
    export let responsive = true;
  
    import {
      Chart,
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale,
    } from 'chart.js';
  
    Chart.register(
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale,
      ChartDeferred
    );
  </script>
  
  <Bar {data} {options} {plugins}/>
  