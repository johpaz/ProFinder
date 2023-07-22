import { BarElement, CategoryScale, Legend, LinearScale, Title } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import { Box } from "@chakra-ui/react"; 


ChartJS.register(CategoryScale, LinearScale, Legend, Title, BarElement);

const BarData = () => {
  // Datos
  const data = {
    labels: ["MIS DATOS", ],
    datasets: [
      {
        label: "Posts",
        data: [50, 30, 70, 45, 90],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderWidth: 1,
      },
      {
        label: "Servicios Activos",
        data: [42, 22, 2, 2, 10],
        backgroundColor: "rgba(120, 120, 220, 0.6)",
        borderWidth: 1,
      }, {
        label: "Servicios Terminados",
        data: [12, 0, 7, 15, 40],
        backgroundColor: "rgba(40, 40, 120, 0.6)",
        borderWidth: 1,
      }, {
        label: "Servicios Cancelados",
        data: [0, 3, 0, 5, 0],
        backgroundColor: "rgba(220, 150, 192, 0.6)",
        borderWidth: 1,
      },
    
    ],
  };

  // Configuración
  const options = {
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: false,
        text: "MIS DATOS",
        font: {
          size: 30, 
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        min: 0,
        max: 50,
      },
      x: {
        type: "category",
        ticks: {
          color: "rgba(0, 220, 195)",
        },
      },
    },
  };

  return (
    <Box width="600px" height="200px">
    <Box>
      <Bar data={data} options={options} />
    </Box>
  </Box>
  );
};

export default BarData;
