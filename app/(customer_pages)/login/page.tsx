
"use client"
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import Link from "next/link";

export default function Login() {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            phone: "",
            password: "",
        },
        validationSchema: Yup.object({
            phone: Yup.string().required("Le numéro de téléphone est requis"),
            password: Yup.string().required("Le mot de passe est requis"),
        }),

        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <main className="flex flex-col space-y-10 items-center justify-center">

            <div className="flex flex-col  xl:w-[500px] p-5 bg-gray-100 rounded-md space-y-10 items-center justify-center">
                <div>
                    <h1 className="font-black text-center text-4xl">Connectez-vous</h1>
                    <Link href="/" className="font-black text-md text-lime-400 text-rigth">Mot de pas oublié</Link>
                </div>

                <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-5 w-[300px]  justify-center items-center">
                    <div>
                        <label className={formik.touched.phone && formik.errors.phone ? "text-red-600" : "text-gray-600" }>{formik.touched.phone && formik.errors.phone ? formik.errors.phone : "Votre numéro de téléphone"}</label>
                        <Input 
                        type="tel" 
                        name="phone" 
                        className="w-[300px] h-[28px]" 
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                    </div>

                    <div>
                        <label className={formik.touched.password && formik.errors.password ? "text-red-600" : "text-gray-600"}>{formik.touched.password && formik.errors.password ? formik.errors.password : "Votre mot de passe"}</label>
                        <Input.Password 
                        type="password" 
                        name="password" 
                        className="w-[300px] h-[28px]"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>

                    <Button htmlType="submit" loading={loading} type="default"  className="bg-lime-700 font-bold">Se connecter</Button>
                </form>
                <Link href="/registre" className="font-black text-md text-center">Vous n'avez pas encore un compte? <span className="text-orange-600">Inscrivez-vous</span> </Link>
            </div>


        </main>
    );
}