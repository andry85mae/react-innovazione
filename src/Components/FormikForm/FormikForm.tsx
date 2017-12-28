import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Car } from '../../Models/common';
import {
    DayOfWeek
} from 'office-ui-fabric-react/lib/DatePicker';
import { Formik, FormikProps, Form, Field, FieldProps, FormikActions } from 'formik';
import * as Yup from 'yup'
import { isEmpty } from 'lodash'


export interface FormikFormProps extends RouteComponentProps<any> {
    Id: number
}
export interface FormikFormState {
    car: Car,
    firstDayOfWeek?: DayOfWeek;
    Name: string | null,
    Email: string | null,
    isActive: boolean,
    ToDate: Date,
    FromDate: Date
}



export class FormikForm extends React.Component<FormikFormProps, FormikFormState> {


    constructor(prop: FormikFormProps & FormikProps<FormikFormState>, state: FormikFormState) {
        super(prop, state);
        this.state = {
            car: new Car(),
            firstDayOfWeek: DayOfWeek.Sunday,
            Name: null,
            Email: null,
            isActive: false,
            ToDate: null,
            FromDate: null,
        };

    }

    SubmitForm(values: FormikFormState, action: FormikActions<FormikFormState>) {

        console.log("Name : " + values.Name);
        console.log("Name : " + values.Email);

        action.setSubmitting(false);

    }

    render() {

        return (
            <div>
                <h1>Rent Car with Formik</h1>
                <Formik
                    initialValues={{
                        firstDayOfWeek: DayOfWeek.Sunday,
                        Name: '',
                        Email: '',
                        isActive: '',
                        ToDate: '',
                        FromDate: '',
                    }}
                    validationSchema={Yup.object().shape({
                        Name: Yup.string()
                            .min(3, 'Name must be at least 3 characters long.')
                            .required('Name is required.'),
                        Email: Yup.string().email('field is not in valid email format').required('Email is required.'),
                    })}
                    onSubmit={(values: FormikFormState, formikActions: FormikActions<FormikFormState>) => this.SubmitForm(values, formikActions)}
                    render={(formikBag: FormikProps<FormikFormState>) =>
                        <Form>
                            <div>
                                <span className="col-md-12">
                                    <Field
                                        name="Name"
                                        render={({ field, form }: FieldProps<FormikFormState>) =>
                                            <span className="form-group col-md-6">
                                                <label >Login Name</label>
                                                <input type="text" {...field} placeholder="Login Name" className={`form-control ${form.errors.Name && form.touched.Name && 'is-invalid'}`} />
                                                {form.errors.Name && <div className="invalid-feedback">{form.errors.Name}</div>}
                                            </span>
                                        } />
                                    <Field
                                        name="Email"
                                        render={({ field, form }: FieldProps<FormikFormState>) =>
                                            <span className="form-group col-md-6">
                                                <label >Email</label>
                                                <input type="text" {...field} placeholder="Email" className={`form-control ${form.errors.Name && form.touched.Name && 'is-invalid'}`} />
                                                {form.errors.Email && <div className="invalid-feedback">{form.errors.Email}</div>}
                                            </span>
                                        } />
                                </span>
                                <span className="col-md-12">
                                    <button type="submit" className="btn btn-primary" disabled={formikBag.isSubmitting || !isEmpty(formikBag.errors)}>
                                        {formikBag.isSubmitting ? 'Wait' : 'Rent a Car'}
                                    </button>
                                </span>
                            </div>


                        </Form>}
                />
            </div>
        )
    }

}