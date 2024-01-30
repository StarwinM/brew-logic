"use client";

import { PrismaClient } from '@prisma/client'
import React from 'react';
import { InputNumber, Button, Form, Input } from 'antd';
import classes from "./Create.module.css";

const prisma = new PrismaClient()

export default function Page({ params }) {
    async function getData(data) {
        alert(`${data.name}, ${data.amount}, ${data.description}`);
    }

    const { TextArea } = Input;

    return <Form onFinish={getData} className={classes.form}>
        <Form.Item name="name"><Input placeholder="Название"/></Form.Item>
        <Form.Item name="amount"><InputNumber placeholder="ОбЪём" addonAfter={"мл."}/></Form.Item>
        <Form.Item name="description"><TextArea placeholder="Описание" autoSize /></Form.Item>
        <Form.Item><Button type="primary" htmlType="submit">Submit</Button></Form.Item>
    </Form>
}