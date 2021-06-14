import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Renato Cintra</Text>
                <Text color="gray.300">
                    renatocinttra@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Renato Cintra" src="https://github.com/renatocinttra.png" />
        </Flex>
    );
}