import { useState, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { validateName, validateEmail, validateMessage } from "./validations";

const FeedbackForm = () => {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const offensiveWords = ["malparido"];

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));

    if (name === "name") {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        nameError: validateName(value),
      }));
    } else if (name === "email") {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        emailError: validateEmail(value),
      }));
    } else if (name === "message") {
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        messageError: validateMessage(value, offensiveWords),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formErrors.nameError ||
      formErrors.emailError ||
      formErrors.messageError
    ) {
      return;
    }

    emailjs
      .sendForm(
        "service_222k70i",
        "template_g2gknab",
        form.current,
        "oLGJ6pmOmylDWs04N"
      )
      .then(
        () => {
          alert("Mensaje enviado con éxito");
        },
        () => {
          alert("Error al enviar el Mensaje");
        }
      );

    // Restablecer los campos del formulario después de enviarlo
    setFormValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box
      maxWidth="500px"
      margin="0 auto"
      padding="20px"
      boxShadow="md"
      borderRadius="md"
    >
      <form ref={form} onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            isInvalid={!!formErrors.nameError}
          />
        </FormControl>
        {formErrors.nameError && <Box color="red">{formErrors.nameError}</Box>}

        <FormControl mt={4}>
          <FormLabel>Correo Electronico</FormLabel>
          <Input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            isInvalid={!!formErrors.emailError}
          />
        </FormControl>
        {formErrors.emailError && (
          <Box color="red">{formErrors.emailError}</Box>
        )}

        <FormControl mt={4}>
          <FormLabel>Mensaje</FormLabel>
          <Textarea
            name="message"
            value={formValues.message}
            onChange={handleInputChange}
            isInvalid={!!formErrors.messageError}
          />
        </FormControl>
        {formErrors.messageError && (
          <Box color="red">{formErrors.messageError}</Box>
        )}

        <Button type="submit" mt={4} colorScheme="blue" isFullWidth size="lg">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default FeedbackForm;
