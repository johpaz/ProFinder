import { useState } from 'react';
import { Box, Button, Heading, Stack, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import imageLogo from './logo.png';

const MercadoPagoForm = () => {
  const [donationAmount, setDonationAmount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(1);
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago('TEST-0d4f34e1-6344-46d8-bb18-7342da1c5c6b');

  const handleDonationChange = (donationAmount) => {
    setDonationAmount(donationAmount);
    setTotalAmount(donationAmount * 1);
  };

  const handleDonate = (value) => {
    setDonationAmount(value);
    setTotalAmount(value * 1);
  };

  const createPreference = async () => {
    try {
      const response = await axios.post('http://localhost:3001/cash', {
        description: 'Gracias por los Cafesitos',
        price: totalAmount,
        quantity: 1,
      });
      console.log(response);
      const { id } = response.data;
      console.log(id);
      return id;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <Box maxW="400px" mx="auto" p={4} bg="#f2f2f2" borderRadius="8px">
      <Box
        bg={`url(${imageLogo}) center center / cover`}
        w="350px"
        h="90px"
        borderRadius="8px"
        mb={4}
      />
      <Heading as="h2" textAlign="center" mb={4}>
        Ayúdame con un Café
      </Heading>
      <Stack direction="row" spacing={2} mb={4}>
        <Button onClick={() => handleDonationChange(3)} bgColor="#e64949" color="#fff">
          😁 ☕ x3
        </Button>
        <Button onClick={() => handleDonationChange(5)} bgColor="#e64949" color="#fff">
          😁 ☕ x5
        </Button>
        <Button onClick={() => handleDonationChange(10)} bgColor="#e64949" color="#fff">
          😁 ☕ x10
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} align="center" mb={4}>
             <NumberInput size="sm" min={1} value={donationAmount} onChange={(_, value) => handleDonate(value)}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper bgColor="#141313" color="#fff" />
            <NumberDecrementStepper bgColor="#141313" color="#fff" />
          </NumberInputStepper>
        </NumberInput>
        <Text className="donate-amount">
          Invitame {donationAmount} {donationAmount === 1 ? 'Cafesito $' : 'Cafesitos $'} {totalAmount}❣
        </Text>
      </Stack>
      <Stack direction="row" mb={4}>
        <Button colorScheme="blue" onClick={handleBuy}>
          Paga
        </Button>
        {preferenceId && <Wallet customization={{ preferenceId }} />}
      </Stack>
    </Box>
  );
};

export default MercadoPagoForm;
