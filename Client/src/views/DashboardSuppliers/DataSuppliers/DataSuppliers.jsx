import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfesionals } from "../../../services/redux/actions/actions";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import { useSessionState } from "../../../services/zustand/useSession";

const DataSuppliers = () => {
  const dataSuppliers = useSelector((state) => state.profesionales);
  // const userSession = JSON.parse(localStorage.getItem("userSession"));
  const session = useSessionState((state) => state.session);

  const profile = dataSuppliers.find((user) => user.id === session.id);
  //console.log(profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfesionals());
  }, []);

  useEffect(() => {
    // Obtén la URL actual

    const currentUrl = window.location.href;

    // Extrae los parámetros de la URL
    const urlParams = new URLSearchParams(currentUrl);

    // Obtén los datos que necesitas
    const collectionStatus = urlParams.get("collection_status");
    const preferenceId = urlParams.get("preference_id");

    // Aquí puedes utilizar la información como desees
    console.log("collectionStatus:", collectionStatus);
    console.log("preferenceId:", preferenceId);

    // Verifica si collectionStatus es "approved"
    if (collectionStatus === "approved") {
      // Enviar los datos al backend en un JSON mediante una solicitud POST
      alert("Eres premium");
      axios
        .post("https://backprofinder-production.up.railway.app/premium", {
          collectionStatus: collectionStatus,
          preferenceId: preferenceId,
        })
        .then((response) => {
          console.log("Respuesta del backend:", response.data);
          // Aquí puedes manejar la respuesta del backend, si es necesario
        })
        .catch((error) => {
          console.error("Error al enviar datos al backend:", error);
          // Aquí puedes manejar errores en caso de que ocurran
        });
    }
  }, []);

  // hay que validar que exista la propiedad porque si no sale undefined, validar con todos los campos
  const numPosts = profile && profile.posts ? profile.posts.length : 0;

  // const serviciosActivos = profile && profile.servicios_activos ? profile.servicios_activos : 0;
  const serviciosActivos = 20;
  const serviciosTerminados = 15;
  const serviciosCancelados = 2;
  // aca van los datos de la gráfica
  const chartData = {
    labels: [
      "Posts",
      "Servicios Activos",
      "Servicios Terminados",
      "servicios Cancelados",
    ],
    datasets: [
      {
        data: [
          numPosts,
          serviciosActivos,
          serviciosTerminados,
          serviciosCancelados,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(192, 75, 75, 0.6)",
          "rgba(3, 75, 75, 0.6)",
          "rgba(200, 200, 20, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Configurar las opciones de la gráfica
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    cutout: "50%",
  };

  //

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    dispatch(getProfesionals());

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartWidth = windowWidth > 600 ? 600 : windowWidth - 20;
  const chartHeight = chartWidth;
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box width={`${chartWidth}px`} height={`${chartHeight}px`}>
        {" "}
        <Doughnut data={chartData} options={chartOptions} />
      </Box>
    </Flex>
  );
};

export default DataSuppliers;
