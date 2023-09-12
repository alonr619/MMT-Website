import ChartDeferred from "chartjs-plugin-deferred";

export const data = {
  labels: ["MMT 2020", "MMT 2021", "MMT 2022", "MMT 2023"],
  datasets: [
    {
      label: "Domestic",
      data: [195, 229, 314, 346],
      backgroundColor: "rgba(255, 134,159,0.4)",
      borderWidth: 2,
      borderColor: "rgba(255, 134, 159, 1)",
    },
    {
      label: "International",
      data: [0, 0, 314, 561],
      backgroundColor: "rgba(98, 182, 239,0.4)",
      borderWidth: 2,
      borderColor: "rgba(98,  182, 239, 1)",
    },
  ],
};

export const options = {
  responsive: true,
  indexAxis: "x",
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  plugins: {
    deferred: {
      xOffset: 150, // defer until 150px of the canvas width are inside the viewport
      yOffset: "50%", // defer until 50% of the canvas height are inside the viewport
      delay: 500, // delay of 500 ms after the canvas is considered inside the viewport
    },
  },
};

export const plugins = [ChartDeferred];
