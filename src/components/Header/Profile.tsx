import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Renato Cintra</Text>
                    <Text color="gray.300">
                        renatocinttra@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Renato Cintra" src="https://github.com/renatocinttra.png" />
        </Flex>
    );
}