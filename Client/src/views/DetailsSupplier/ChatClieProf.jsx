
import ChatBot from "react-simple-chatbot";
import  { ThemeProvider } from "styled-components";

const theme = {
  background: "#F2F2F2", // este es el fondo del chat
  fontFamily: "Arial, sans-serif", // Fuente de los textos
  // botBubbleColor: "#41BFB3", // Color de fondo de los mensajes del bot
  headerBgColor: "#255959", //este es el bg del encabezado
  headerFontColor: "#ffffff", // este es el color del texto del encabezado
  botBubbleColor: "#37A69B", // Color de fondo de los mensajes del bot
  botFontColor: "#000000", // Color del texto de los mensajes del bot
  userBubbleColor: "#506266", // Color de fondo de los mensajes del usuario
  userFontColor: "#000000", // Color del texto de los mensajes del usuario
};


const ClieProfChatBot = ({data}) => {
  // Definimos los pasos del chatbot
  const steps = [
    {
      id: "1",
      message:` ¡Hola! Soy ${data.name} ¿Cómo te llamas?`,
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hola {previousValue}! ¿Que horario deseas que pase?",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: "opcion1", label: "Por la mañana ?", trigger: "5" }, // Si el usuario elige esta opción, el siguiente paso será el paso con id "5"
        { value: "opcion2", label: "Al mediodia? ", trigger: "6" }, // Si el usuario elige esta opción, el siguiente paso será el paso con id "6"
        { value: "opcion3", label: "O a la tarde?", trigger: "7" }, // Si el usuario elige esta opción, el siguiente paso será el paso con id "7"
      ],
    },
    {
      id: "5",
      message: "Te visitare entre el horario de 9 a 12 ",
      trigger: "8",
    },
    {
      id: "6",
      message: "Te visitare entre el horario de 12 a 14 ",
      trigger: "8",
    },
    {
      id: "7",
      message: "Te visitare entre el horario de 14 a 18 ",
      trigger: "8",
    },
    {
      id: "8",
      message: "¿Necesitas cambiar el horario?",
      trigger: "moreOptions",
    },
    {
      id: "moreOptions",
      options: [
        { value: "opcion1", label: "Sí", trigger: "4" },
        { value: "opcion2", label: "No", trigger: "byee" },
      ],
    },
    {
      id: "byee",
      message: `Gracias, ${data.name}`,
      trigger: "restartChatbot",
    },
    {
      id: "restartChatbot",
      message: "¿Te gustaría volver a contactarte?",
      trigger: "restartOptions",
    },
    {
      id: "restartOptions",
      options: [
        { value: "yes", label: "Sí", trigger: "1" },
        { value: "no", label: "No", end: true },
      ],
    },
  ];
  const chatbotHeaderTitle = `${data.name}` ;

  return (
       <ThemeProvider theme={theme}>
      <ChatBot steps={steps} headerTitle={chatbotHeaderTitle} />
    </ThemeProvider>
  );
};

export default ClieProfChatBot;
