import { useContext, useEffect, useState } from "react";
import { Menu } from "../components/menu/Menu";
import { firestore } from '../services/firebase';
import { AuthContext } from "../contexts/AuthContext";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';


import { GiBabyfootPlayers } from 'react-icons/gi';

export const List = () => {
    const { user, signInWithGoogle } = useContext(AuthContext);
    const [list, getListOfPlayers] = useState([]);
    const toast = useToast();

    useEffect(() => {
        firestore.collection('listPresence').onSnapshot((snapshot: any) =>
            getListOfPlayers(snapshot.docs.map((doc: any) => doc.data()).reverse()));
    }, []);

    let teste = window.location.pathname
    let ts = teste.split("/")[1]
    console.log(list)

    async function putNameOnList() {
        const addPlayer = await firestore.collection('listPresence').add({
            displayName: user?.name,
            userID: user?.id,
            avatar: user?.avatar,
        }).then((docRef) => {
            firestore.doc(`listPresence/${docRef.id}`).update({ id: docRef.id });
        });

        toast({
            description: 'Presença confirmada',
            status: 'success',
            position: 'top',
            duration: 2000,
            isClosable: true,
        });

    }
    type listPresence = {
        avatar: string,
        displayName: string,
        position: string
    }
    return (

        <>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Lista de jogadores confirmados <strong>03 Jogadores</strong></TableCaption>
                    <Thead>
                        <Tr>
                            <Th>

                            </Th>
                            <Th>Jogador</Th>
                            <Th>Posição</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            list.map((players: listPresence, i) => {
                                return <Tr key={i}>
                                    <Td>
                                        <Avatar name={players?.displayName} src={players?.avatar} />
                                    </Td>
                                    <Td>{players?.displayName}</Td>
                                    <Td>{players?.position}</Td>
                                </Tr>

                            })
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th>

                            </Th>
                            <Th> 02 Linhas | 01 Goleiro</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <Button colorScheme='twitter' leftIcon={<GiBabyfootPlayers />} onClick={putNameOnList}>
                Confirmar Presença
            </Button>
        </>
    )
}

