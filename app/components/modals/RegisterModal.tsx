'use client'
import { FieldValues, SubmitHandler  ,useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from "@/app/components/modals/Modal"
import Heading from "@/app/components/Heading"
import Input from "@/app/components/inputs/Input"
import Button from "@/app/components/Button"
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FcGoogle , } from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa'
const RegisterModal = () => {
        const registerModal = useRegisterModal();
        const [isLoading , setIsLoading] = useState(false);


         const  {register , handleSubmit , formState : { errors } } = useForm<FieldValues>({
                  defaultValues:{
                           name:"",
                           email:"",
                           password:""
                  }
         })

 
         const onSubmit : SubmitHandler<FieldValues> = (data) =>{
                setIsLoading(true)

                axios.post('api/register' ,  data) 
                .then(()=>{
                        registerModal.onClose
                })
                .catch((error)=>{
                        toast.error("something went wrong ")
                })
                .finally(()=>{
                        setIsLoading(false)
                })
         }
         const BodyContent = (
                <div className=' flex flex-col gap-4 ' >
                   <Heading 
                   title = "Welcome to TravelNest"
                   subtitle = "create a account"
                   />
                   <Input 
                        id='email'
                        label='Email'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required

                   />
                   <Input 
                        id='name'
                        label='Name'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required

                   />
                   <Input 
                        id='password'
                        type='password'
                        label='Password'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required

                   />
                </div>
         )

         const Footer = (
                <div className=' flex flex-col gap-4 mt-3 '>
                        <hr />
                       <Button 
                       outline
                       label ="Continue with google"
                       icon ={FcGoogle}
                       onClick={()=>{}}
                       />
                       <Button 
                       outline
                       label ="Continue with github"
                       icon ={FaGithub}
                       onClick={()=>{}}
                       />

                  <div className=' text-neutral-500 mt-4 text-center font-light  '>
                        <div className=' flex flex-row gap-2 justify-center items-center '>
                                <div>
                                        Already have an account?
                                </div>
                                <div  onClick={registerModal.onClose}
                                className=' text-neutral-800 cursor-pointer hover:underline  '>
                                        Log in
                                </div>
                        </div>

                  </div>
                </div>
         )


         return ( 
                <Modal 
                isOpen={registerModal.isOpen}
                onClose={registerModal.onClose}
                title='Regsiter'
                actionLabel='continue'
                disabled= {isLoading}
                onSubmit={handleSubmit(onSubmit)}
                body={BodyContent}
                footer={Footer}
                />
         )
}
 
export default RegisterModal;
