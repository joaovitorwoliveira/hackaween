"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RegisterForm = () => {
const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    telefone: '',
});

const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do formulário:', formData);
};

return (
    <form onSubmit={handleSubmit} className='border-2 border-gray-300 p-4 rounded-lg shadow-md'>
    <div>
        <Label htmlFor="nome">Nome</Label>
        <Input
        type="text"
        id="nome"
        name="nome"
        required
        value={formData.nome}
        onChange={handleChange}
        />
    </div>
    <div>
        <Label htmlFor="email">Email</Label>
        <Input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        />
    </div>
    <div>
        <Label htmlFor="cpf">CPF</Label>
        <Input
        type="text"
        id="cpf"
        name="cpf"
        value={formData.cpf}
        onChange={handleChange}
        required
        />
    </div>
    <div>
        <Label htmlFor="endereco">Endereço</Label>
        <Input
        type="text"
        id="endereco"
        name="endereco"
        value={formData.endereco}
        onChange={handleChange}
        required
        />
    </div>
    <div>
        <Label htmlFor="telefone">Número de Telefone</Label>
        <Input
        type="text"
        id="telefone"
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        required
        />
    </div>
    <div className='flex justify-center mt-4'>
        <Button type="submit">Registrar</Button>
    </div>
    </form>
);
};

export default RegisterForm;