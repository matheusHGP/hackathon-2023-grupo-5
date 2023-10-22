import { useEffect, useState, useContext } from 'react'
import { ScrollView } from 'react-native';
import { Box, Text } from "native-base";
import PageWithHeader from '../../components/PageWithHeader'
import TransactionCard from '../../components/TransactionCard';
import RankingCard from '../../components/RankingCard';
import * as EventsService from '../../services/events/eventsService'
import { Context } from '../../context/context'

export default function Ranking({ navigation }) {
    const users = [
        {
            id: 1,
            name: 'Martha',
            points: 110,
            status: 1,
            profileUri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 2,
            name: 'Marcos',
            points: 111,
            status: 1,
            profileUri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 3,
            name: 'Rodolfo',
            points: 115,
            status: 0,
            profileUri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 4,
            name: 'Carol',
            points: 150,
            status: 1,
            profileUri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
    ]
    const [usersData, setUsersData] = useState([])
    const { setEventData } = useContext(Context)

    const getEvents = async () => {
        // setLoading(true)
        const resp = await EventsService.getEvents()
        // setLoading(false)
        setUsersData(resp.data)

        // if (!resp.success) {
        //     setActionError(resp.message)
        //     return
        // }
    }

    useEffect(() => {
        // getEvents()
        setUsersData(users.map(user => ({...user, status: Math.floor(Math.random() * 2)})))
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
                    Visualize os usuários que mais ajudaram nas ações cadastradas pelas ONGs
                </Text>
                <Box mt={5}>
                    <ScrollView>
                        {usersData.map((item, index) => {
                            return <RankingCard
                                key={item.id}
                                name={item.name}
                                uri={item.profileUri}
                                points={item.points}
                                status={item.status}
                                position={index + 1}
                            />
                        })}
                    </ScrollView>
                </Box>
            </Box>
        </PageWithHeader>
    );
}
