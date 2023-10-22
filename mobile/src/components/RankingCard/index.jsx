import {
    Box,
    Text,
    Progress,
    Center,
    VStack,
    Icon,
    HStack,
    Pressable,
    Avatar
} from 'native-base'
// import { Card } from './style'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const STATUS_COLORS = {
    0: 'red.500',
    1: 'yellow.300',
    2: 'orange.400',
    3: 'green.600',
}

const STATUS_PROGRESS = {
    0: 10,
    1: 30,
    2: 70,
    3: 100,
}

const RankingCard = ({
    name,
    points,
    position,
    uri,
    status
}) => {
    return <Box
        padding={3}
        marginTop={5}
        borderColor="coolGray.200"
        borderWidth="1"
        rounded="lg"
        height={"24"}
    >
        <Pressable onPress={() => {}}>
            <HStack height="full" alignContent="center" alignItems="center">
                <Box alignContent="center">
                    <Avatar
                        size={"lg"}
                        bg="green.500"
                        source={{
                            uri
                        }}
                    >
                        AJ
                    </Avatar>
                </Box>

                <Box ml={5}>
                    <Text fontSize={"lg"} fontWeight={"bold"}>{name}</Text>
                    <Text fontSize={"sm"} fontWeight={"bold"} color="gray.400">
                        {points} pontos
                    </Text>
                </Box>

                <Box right={0} position="absolute">
                    <HStack alignContent="center" justifyContent="center" alignItems="center">
                        <Icon
                            color={status === 0 ? "error.500" : "success.500"}
                            size={"xl"}
                            as={status === 0 ?
                                <MaterialIcons name="arrow-circle-down" />
                                : <MaterialIcons name="arrow-circle-up" />
                            }
                        />
                        <Box
                            ml={2}
                            width={50}
                            height={50}
                            borderRadius="full"
                            // bgColor="orange.400"
                            // bgColor="gray.400"
                            bgColor="success.400"
                            padding={1}
                            justifyContent={"center"}
                            alignContent={"center"}
                            alignItems={"center"}
                        >
                            <Box
                                borderRadius="full"
                                bgColor="white"
                                width="full"
                                height="full"
                                justifyContent={"center"}
                            >
                                <Text textAlign={"center"}>{position}</Text>
                            </Box>
                        </Box>
                    </HStack>
                </Box>
            </HStack>
        </Pressable>
    </Box>
}

export default RankingCard