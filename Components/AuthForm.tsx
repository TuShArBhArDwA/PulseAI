"use client"

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { auth } from "@/Firebase/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { signIn, signUp } from "@/lib/actions/auth.action";
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "@/Components/ui/form";
import { FormField } from "@/Components/ui/form";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up' ?
            z.string().min(3) :
            z.string().optional(),
        email: z.string().email(),
        password: z.string().min(6, "Password should be at least 6 characters"),
    })
}

const AuthForm = ({ type }:{ type : FormType}) => {
    const router = useRouter()
    const formSchema = authFormSchema(type)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    //values & errors
    const isSignIn = type === "sign-in"

    const nameValue = form.watch("name")
    const nameError = form.formState.errors.name
    const isNameValid = isSignIn || (!nameError && nameValue ?.length >= 3)

    const emailValue = form.watch("email")
    const emailError = form.formState.errors.email
    const isEmailValid = isSignIn || (!emailError && (emailValue?.length > 0))

    // Auto focus logic
    const emailInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isNameValid && emailInputRef.current) {
            emailInputRef.current.focus()
        }
    }, [isNameValid])

    useEffect(() => {
        if (isEmailValid && passwordInputRef.current) {
            passwordInputRef.current.focus()
        }
    }, [isEmailValid])

    // Submit handler
   async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log("SUBMITTED VALUES:", values)

            if (type === "sign-up") {

                const {name, email, password} = values;

                const userCredential = await createUserWithEmailAndPassword( auth, email, password);

                const result = await signUp({
                    uid: userCredential.user.uid,
                    name: name!,
                    email,
                    password,
                });

                if(!result?.success){
                    toast.error(`Registration failed: ${result?.message || "Unknown error."}`);
                    return;
                }

                toast.success(`Account created successfully. Please sign in.`)
                router.push('/sign-in')
            } else {
                const{ email, password } = values;

                const userCredential = await signInWithEmailAndPassword(auth, email, password);

                const idToken = await userCredential.user.getIdToken();

                if(!idToken){
                    toast.error('Sign-in failed. Please try again.')
                    return;
                }
                await signIn({
                    email, idToken
                })

                toast.success(`Signed in successfully.`)
                router.push('/')
            }
        } catch (error: any) {
            console.error("Auth error:", error);

            // Error messages
            let message = "Something went wrong. Please try again.";
            if (error.code === "auth/email-already-in-use") {
                message = "Email is already in use. Try signing in instead.";
            } else if (error.code === "auth/invalid-email") {
                message = "Invalid email address.";
            } else if (error.code === "auth/user-not-found") {
                message = "No user found with this email.";
            } else if (error.code === "auth/wrong-password") {
                message = "Incorrect password.";
            } else if (error.code === "auth/weak-password") {
                message = "Password should be at least 6 characters.";
            }

            toast.error(message);
        }
    };


    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.svg" alt="logo" height={34} width ={38}/>
                    <h2 className="bg-gradient-to-r from-purple-200 to-pink-400 text-transparent bg-clip-text">
                        PulseAI Prep
                    </h2>
                </div>
                <h3 className = " items-center bg-gradient-to-r from-purple-200 to-pink-400 text-transparent bg-clip-text font-bold ">
                    Feel the pulse of success with dynamic AI-interviews </h3>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        {!isSignIn && (
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-pink-400  font-semibold">Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="type your name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel  className="text-pink-400 font-semibold">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type = "email"
                                            placeholder = "type your email-id"
                                            disabled = { !isNameValid }
                                            // ref = { emailInputRef }
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-pink-400 font-semibold">Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type = "password"
                                            placeholder = "type your password"
                                            disabled = {!isEmailValid}
                                            // ref = {passwordInputRef}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {isSignIn && (
                            <div className="text-right">
                                <Link
                                    href="/sign-in/forgot-password"
                                    className="text-sm font-semibold text-pink-400 hover:underline "
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        )}


                        <Button type="submit"
                            className="btn relative overflow-hidden text-white font-bold rounded-full shadow-md
                            bg-gradient-to-r from-purple-200 to-pink-400
                            transition-all duration-500 ease-in-out
                            hover:scale-105 hover:shadow-lg">
                            <span className="relative z-10">
                                {isSignIn ? "Sign in" : "Create an account"}
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-200 opacity-0 hover:opacity-105 transition-opacity duration-500"></span>
                        </Button>
                    </form>
                </Form>

                <p className="text-center">
                    {isSignIn ? "Don't have an account yet?" : "Already have an account?"}
                    <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
                        {!isSignIn ? "Sign in" : "Sign up"}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default AuthForm
