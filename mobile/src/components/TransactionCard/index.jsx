import { Box, Text, Progress, Center, VStack, Icon, HStack, Pressable } from 'native-base'
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

const TransactionCard = ({
    name,
    ongName,
    reason,
    type,
    points,
    status,
    onPress
}) => {
    return <Box
        padding={3}
        marginTop={5}
        borderColor="coolGray.200"
        borderWidth="1"
        rounded="lg"
        height={135}
    >
        <Pressable onPress={onPress}>
            <VStack justifyContent="space-between" height="full">
                <HStack justifyContent="space-around">
                    <Box width="80%">
                        <Text fontSize="lg" fontWeight="bold">{name}</Text>
                        <Text color="gray.400" fontWeight="bold">{ongName}</Text>
                    </Box>
                    <Box alignItems="center" justifyContent="center" right={1} top={3}>
                        <Icon
                            as={<MaterialIcons name="emoji-events" />}
                            size="3xl"
                            color="yellow.400"
                        />
                        <Text color="yellow.500" fontWeight="700">{points} pontos</Text>
                    </Box>
                </HStack>

                <Box mt={1}>
                    <Text color="gray.500" fontWeight="bold">Progresso do Objetivo</Text>
                    <Box width="90%">
                        <Progress
                            rounded
                            value={STATUS_PROGRESS[status]}
                            _filledTrack={{
                                bg: STATUS_COLORS[status]
                            }}
                            size="xs"
                        />
                    </Box>
                </Box>
            </VStack>
        </Pressable>
    </Box>
}

export default TransactionCard