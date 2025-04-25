'use client'
import React, {useEffect, useState} from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import axios from "axios";

const token = '0000-8432-3244-0923'

async function getPrograms() {
    try {
        const response = await axios.get('https://api-staging.supmanagement.ml/v2/programs', {
            timeout: 1000,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

    } catch (error) {
        console.log('Erreur lors de la récupération des programmes :', error.message);
    }
}

const api = axios.create({
    baseURL: 'https://api-staging.supmanagement.ml/v2',
    timeout: 1000,
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});

async function updateProgram(id, data) {
    try {
        const response = await api.patch(`/programs/${id}`, data);
        console.log('Programme modifié :', response.data);
    } catch (error) {
        console.log('Erreur modification programme :', error.message);
    }
}
async function deleteProgram(id) {
    try {
        const response = await api.delete(`/programs/${id}`);
        console.log('Programme supprimé :', response.data);
    } catch (error) {
        console.log('Erreur suppression programme :', error.message);
    }
}


const Page = () => {
    const [programs, setPrograms] = useState([])

    useEffect(() => {
        async function fetchPrograms() {
            try {
                const response = await axios.get('https://api-staging.supmanagement.ml/v2/programs', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setPrograms(response.data); // ou response.data.data selon l'API
            } catch (err) {
                console.error('Erreur lors du fetch des programmes:', err)
            }
        }

        fetchPrograms()
    }, [token]);
    console.log(programs)
    async function createProgram(data) {
        try {
            const response = await api.post('/programs', data);
            console.log('Programme créé :', response.data);
        } catch (error) {
            console.log('Erreur création programme :', error.message);
        }
    }


    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-4 p-5">
                <Button >
                    cree un program
                </Button>

                <Button >
                    Edit un program
                </Button>

                <Button className=''>
                    Supprimer un program
                </Button>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Nom</TableHead>
                        <TableHead>Sigle</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Niveaux associés</TableHead>
                        <TableHead>Date de création</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {programs.map((program) => (
                        <TableRow key={program.program}>
                            <TableCell className="font-medium">{program.name}</TableCell>
                            <TableCell>{program?.sigle}</TableCell>
                            <TableCell>{program?.programType?.name}</TableCell>
                            <TableCell>{program.paymentMethod}</TableCell>
                            <TableCell>{program?.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};

export default Page;