// import { Box } from "@chakra-ui/react";
// import { Line } from "react-chartjs-2";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getProfesionals } from "../../../services/redux/actions/actions";

// const LineData = () => {
//   const dataSuppliers = useSelector((state) => state.profesionales);
//   const userSession = JSON.parse(localStorage.getItem("userSession"));
//   const profile = dataSuppliers.find((user) => user.id === userSession.id);
//   console.log(profile);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getProfesionals());
//   }, []);

//   // Data for the chart
//   const lineChartData = {
//     labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
//     datasets: [
//       {
//         label: "Servicios Activos",
//         data: [10, 15, 20, 25, 30], // Reemplazar estos datos con los valores reales
//         fill: false,
//         borderColor: "rgba(75, 192, 192, 1)",
//         tension: 0.1,
//       },
//       {
//         label: "Servicios Terminados",
//         data: [5, 10, 15, 20, 25], // Reemplazar estos datos con los valores reales
//         fill: false,
//         borderColor: "rgba(192, 75, 75, 1)",
//         tension: 0.1,
//       },
//       {
//         label: "Servicios Cancelados",
//         data: [2, 4, 6, 8, 10], // Reemplazar estos datos con los valores reales
//         fill: false,
//         borderColor: "rgba(3, 75, 75, 1)",
//         tension: 0.1,
//       },
//     ],
//   };

//   // Configuración de las opciones de la gráfica de líneas
//   const lineChartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: "top",
//       },
//     },
//   };

//   return (
//     <Box display="flex" justifyContent="space-between">
//       <div>
//         {/* Check if lineChartData is defined before rendering the Line chart */}
//         {lineChartData && lineChartData.labels && lineChartData.labels.length > 0 ? (
//           <Line data={lineChartData} options={lineChartOptions} />
//         ) : (
//           <p>Loading chart data...</p>
//         )}
//       </div>
//     </Box>
//   );
// };

// export default LineData;
