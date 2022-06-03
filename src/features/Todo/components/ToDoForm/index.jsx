import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';

ToDoForm.propTypes = {
    onSubMit: PropTypes.func,
};

function ToDoForm(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        }
    });
    const handleSubmit = (values) => {
        console.log('ToDo Form', values);
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