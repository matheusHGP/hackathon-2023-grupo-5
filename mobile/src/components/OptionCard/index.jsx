import { Box, Text, Progress, Center, VStack, Icon } from 'native-base'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const STATUS_COLORS = {
    1: 'red.500',
    2: 'yellow.300',
    3: 'orange.400',
    4: 'green.600',
}

const STATUS_PROGRESS = {
    1: 10,
    2: 30,
    3: 70,
    4: 90,
}

const TransactionCard = ({
    name,
    ongName,
    cause,
    type,
    status
}) => {
    return <Box
        padding={3}
        shadow={1}
        margin={3}
        // borderColor="coolGray.200"
        // borderWidth="1"
        bgColor="red.400"
        rounded="lg"
        height="56"
        width="40"
        // style={{
        //     shadowColor: '#000',
        //     shadowOffset: { width: 0, height: 1 },
        //     shadowOpacity: 0.2,
        //     shadowRadius: 2,
        //     elevation: 5
        // }}
    // rounded="lg"
    >
        <VStack justifyContent="space-between" height="full">
            
        </VStack>

    </Box>
}

export default TransactionCard