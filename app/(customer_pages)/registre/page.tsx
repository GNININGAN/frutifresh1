
"use client"
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import Link from "next/link";

export default function Regisgre() {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            phone: "",
            password: "",
            email: "",
            lastName: "",
            firstName: "",
            password2: "",
        },
        validationSchema: Yup.object({
            phone: Yup.string().required("Le numéro de téléphone est requis"),
            password: Yup.string().required("Le mot de passe est requis"),
            email: Yup.string().email("Email invalide").required("L'email est requis"),
            lastName: Yup.string().required("Le nom est requis"),
            firstName: Yup.string().required("Le prénom est requis"),
            password2: Yup.string().required("Le mot de passe est requis"),
        }),

        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <main className="flex flex-col space-y-10 items-center justify-center">

            <div className="flex flex-col  xl:w-[700px] p-5 bg-gray-100 rounded-md space-y-10 items-center justify-center">
                <div>
                    <h1 className="font-black text-center text-4xl">Creer un compte.</h1>

                </div>

                <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-5  w-[300px]  justify-center items-center">

                    {/** names */}
                    <div className="flex w-full md:flex-row md:space-x-5 flex-col space-y-5  md:space-y-0">
                        <div>
                            <label className={formik.touched.lastName && formik.errors.lastName ? "text-red-600" : "text-gray-600"}>
                                {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : "Nom"} <span className="text-red-600">*</span>
                            </label>

                            <Input
                                type="text"
                                name="lastName"
                                className="md:w-[150px] h-[28px]"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div>
                            <label className={formik.touched.firstName && formik.errors.firstName ? "text-red-600" : "text-gray-600"}>
                                {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : "Prenom"} <span className="text-red-600">*</span>
                            </label>

                            <Input
                                type="text"
                                name="firstName"
                                className="md:w-[150px] h-[28px]"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>


                    {/** phone and email */}
                    <div className="flex w-full md:flex-row md:space-x-5 flex-col space-y-5  md:space-y-0">
                        <div>
                            <label className={formik.touched.phone && formik.errors.phone ? "text-red-600" : "text-gray-600"}>
                                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : "Téléphone"} <span className="text-red-600">*</span>
                            </label>

                            <Input
                                type="tel"
                                name="phone"
                                className="md:w-[150px] h-[28px]"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div>
                            <label className={formik.touched.email && formik.errors.email ? "text-red-600" : "text-gray-600"}>
                                {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"} <span className="text-red-600">*</span>
                            </label>

                            <Input
                                type="email"
                                name="email"
                                className="md:w-[150px] h-[28px]"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>


                    <div>
                        <label className={formik.touched.password && formik.errors.password ? "text-red-600" : "text-gray-600"}>{formik.touched.password && formik.errors.password ? formik.errors.password : "Votre mot de passe"} <span className="text-red-600">*</span>
                        </label>
                        <Input.Password
                            type="password"
                            name="password"
                            className="md:w-[300px] h-[28px]"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>

                    <div>
                        <label className={formik.touched.password2 && formik.errors.password2 ? "text-red-600" : "text-gray-600"}>
                            {formik.touched.password2 && formik.errors.password2 ? formik.errors.password2 : "Confirmer le mot de passe"} <span className="text-red-600">*</span>
                        </label>
                        <Input.Password
                            type="password"
                            name="password2"
                            className="md:w-[300px] h-[28px]"
                            value={formik.values.password2}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>

                    <Button htmlType="submit" loading={loading} type="default" className="bg-lime-700 font-bold">S'inscrire</Button>
                </form>
                <Link href="/login" className="font-black text-md text-center">Vous avez déjà encore un compte? <span className="text-orange-600">connectez-vous</span> </Link>
            </div>


        </main>
    );
}