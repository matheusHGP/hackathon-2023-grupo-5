import { useEffect, useState, useContext } from 'react'
import { ScrollView } from 'react-native';
import { Box, Text } from "native-base";
import PageWithHeader from '../../components/PageWithHeader'
import TransactionCard from '../../components/TransactionCard';
import * as EventsService from '../../services/events/eventsService'
import { Context } from '../../context/context'

export default function Home({ navigation }) {
    const [eventsData, setEventsData] = useState([])
    const { setEventData } = useContext(Context)

    const handleCardClick = (id) => {
        setEventData({ ...eventsData.find(e => e.id === id) })
        navigation.navigate("Detalhe da Ação")
    }

    const getEvents = async () => {
        // setLoading(true)
        const resp = await EventsService.getEvents()
        // setLoading(false)
        setEventsData(resp.data)

        // if (!resp.success) {
        //     setActionError(resp.message)
        //     return
        // }
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <PageWithHeader>
            <Box>
                <Text
                    fontWeight="medium"
                    textAlign="left"
                    color="#909090"
                    mt={0}
                >
                    Visualize todas as causas cadastradas pelas ONGs que estão em andamento
                </Text>
                <Box mt={5}>
                    <ScrollView>
                        {eventsData.map(item => {
                            return <TransactionCard
                                key={item.id}
                                name={item.name}
                                ongName={item.organizationName}
                                reason={item.reason}
                                points={item.points}
                                type={item.ongName}
                                status={item.status}
                                onPress={() => handleCardClick(item.id)}
                            />
                        })}
                    </ScrollView>
                </Box>
            </Box>
        </PageWithHeader>
    );
}
