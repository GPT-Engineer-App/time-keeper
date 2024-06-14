import { Container, VStack, Heading, Input, Button, Text, Box, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [hours, setHours] = useState("");
  const [savedHours, setSavedHours] = useState([]);
  const toast = useToast();

  const handleSave = () => {
    if (hours.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter the number of hours.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setSavedHours([...savedHours, hours]);
    setHours("");
    toast({
      title: "Success",
      description: "Hours saved successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading>Work Hours Tracker</Heading>
        <Input
          placeholder="Enter hours worked"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          size="lg"
        />
        <Button colorScheme="teal" size="lg" onClick={handleSave}>
          Save Hours
        </Button>
        <Box width="100%" mt={4}>
          <Heading size="md">Saved Hours</Heading>
          {savedHours.length === 0 ? (
            <Text>No hours saved yet.</Text>
          ) : (
            savedHours.map((hour, index) => (
              <Text key={index}>{hour} hours</Text>
            ))
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;