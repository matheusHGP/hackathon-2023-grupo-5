import { useContext } from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Button, Avatar, HStack, Text, VStack, Icon, Pressable } from "native-base";
import { Context } from '../../context/context';
import PageWithHeader from '../../components/PageWithHeader'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function MenuItem({
    name,
    icon,
    color = "gray.400",
    hasArrowIcon = true,
    onPress
}) {
    const { setIsAuth } = useContext(Context)

    return (
        <Pressable onPress={onPress}>
            <HStack alignContent="center" alignItems="center" justifyContent="space-between" mb="5">
                <HStack alignContent="center" alignItems="center">
                    <Icon
                        size="2xl"
                        as={<MaterialIcons name={icon} />}
                        // as={<MaterialIcons name="score" />}
                        color={color}
                        mr={2}
                    />

                    <Text
                        fontWeight="bold"
                        color={color}
                        fontSize="md"
                    >
                        {name}
                    </Text>
                </HStack>
                {hasArrowIcon &&
                    <Box>
                        <Icon
                            color={color}
                            size="md"
                            as={<MaterialIcons name="arrow-forward-ios" />}
                            mr={2}
                        />
                    </Box>
                }
            </HStack>
        </Pressable>
    );
}
