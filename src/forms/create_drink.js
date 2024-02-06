import { PrismaClient } from '@prisma/client'
import React from 'react';
import { InputNumber, Button, Form, Input } from 'antd';
import classes from "./css/Form.module.css";

const prisma = new PrismaClient()

export default function CreateDrinkForm({ params, drink = null }) {
    async function getData(data) {
        alert(`${data.name}, ${data.amount}, ${data.description}`);
    }

    const { TextArea } = Input;

    if (drink) {

    } else {
        return <Form onFinish={getData} className={classes.form}>
            <Form.Item name="name"><Input placeholder="Название" /></Form.Item>
            <Form.Item name="amount"><InputNumber placeholder="ОбЪём" addonAfter={"мл."} /></Form.Item>
            <Form.Item name="description"><TextArea placeholder="Описание" autoSize /></Form.Item>
            <Form.Item><Button type="primary" htmlType="submit">Добавить</Button></Form.Item>
        </Form>;
    }
}
