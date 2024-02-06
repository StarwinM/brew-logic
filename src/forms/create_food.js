import { InputNumber, Button, Form, Input } from 'antd';
import classes from './css/Form.module.css';
import createFood from './functions/createFood';

export default function GetFoodForm({ params, food = null }) {

    const { TextArea } = Input;

    if (food) {
    } else {
        return <Form onFinish={createFood} className={classes.form}>
            <Form.Item name="name"><Input placeholder="Название" /></Form.Item>
            <Form.Item name="weight"><InputNumber placeholder="Вес" addonAfter={"гр."} /></Form.Item>
            <Form.Item name="description"><TextArea placeholder="Описание" autoSize /></Form.Item>
            <Form.Item><Button type="primary" htmlType="submit">Добавить</Button></Form.Item>
        </Form>;
    }
}