import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


ToDoForm.propTypes = {
    onSubMit: PropTypes.func,
};

function ToDoForm(props) {
    const schema = yup.object({
        title: yup.string().required('Nhập title'),
      })
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    });
    const handleSubmit = (values) => {
        const {onSubMit} = props;
        if(onSubMit){
            onSubMit(values);
        }
        form.reset();
    }
    return (
        <div>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="title" lable="ToDo" form={form} />
            </form>
        </div>
    );
}

export default ToDoForm;