import { useContext, useEffect, useLayoutEffect, useState } from "react";
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
    const [isNameOnList, getIsNameOnList] = useState(Boolean)


    useEffect(() => {
        firestore.collection('listPresence').onSnapshot((snapshot: any) =>
            getListOfPlayers(snapshot.docs.map((doc: any) => doc.data()).reverse()));

    }, []);

    useLayoutEffect(() => {
        nameOnList();
    }, [list]);



    function nameOnList(): any {
        list.forEach((element: listPresence) => {
            if (element.userID === user?.id) {
                getIsNameOnList(true)
            }
        });
    }


    async function putNameOnList() {
        if (isNameOnList) {
            toast({
                description: 'Nome já esta na Lista',
                status: 'error',
                position: 'top',
                duration: 2000,
                isClosable: true,
            });
        } else {
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
    }

    function deletePost(id: string) {
        firestore.doc(`listPresence/${id}`).delete();
        getIsNameOnList(false)

    }

    type listPresence = {
        userID: string,
        id: string,
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
                                    {user?.id === players.userID ? <button className="btnDelete" onClick={() => { deletePost(players.id); }}>Delete</button> : null}
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

