import { Field as FormikField, FormikProps } from 'formik';

interface Props {
    name: string;
    type: string;
    formik: FormikProps<any>
    placeholder?: string
    disabled?: boolean
    as?: string
}

const FormField = ({ name, type, ...props }: Props) => {
    const { errors, touched } = props.formik;
    return (
        <>
            <FormikField 
            name={name} 
            placeholder={props.placeholder ? props.placeholder : `Enter ${name}`} 
            type={type} 
            className={(errors[name] && touched[name]) ? "form-control ps-5 border-danger" : "form-control ps-5"}
            disabled={props.disabled}
            as={props.as}
             />
            {errors[name] && touched[name] ? (
                <div className='text-danger text-italic mt-1' style={{
                    fontStyle: 'italic',
                    fontSize: '13px',
                }}>{errors[name] as string}</div>
            ) : null}
        </>
    )
}

export default FormField