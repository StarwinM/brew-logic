"use client";

import { PrismaClient } from '@prisma/client'
import React from 'react';
import { InputNumber, Button, Form, Input } from 'antd';

const prisma = new PrismaClient()

export default function Page({ params }) {
    async function getData(formData) {
        const rawFormData = Object.fromEntries(formData);
        alert(rawFormData);
    }

    return <Form>
        <Form.Item><Input placeholder="Название" /></Form.Item>
    </Form>
}