import { Text } from 'native-base'

export default function Error({children}) {
    return <Text color="error.400" fontWeight="bold">{children}</Text>
}