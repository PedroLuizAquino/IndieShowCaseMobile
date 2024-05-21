import React from "react";
import { Box, VStack, ScrollView } from "native-base";

export default function Carrossel({ children }) {
  return (
    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {React.Children.map(children, (child, index) => (
          <VStack justifyContent={"center"} alignItems={"center"} mr={3}>
            {child}
          </VStack>
        ))}
      </ScrollView>
    </Box>
  );
}
