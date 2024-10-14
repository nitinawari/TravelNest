'use client'
import { FieldValues, SubmitHandler  ,useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from "@/app/components/modals/Modal"
import Heading from "@/app/components/Heading"
import Input from "@/app/components/inputs/Input"
import { useState } from 'react';
import axios from 'axios';

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
                        console.log(error)
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


         return ( 
                <Modal 
                isOpen={registerModal.isOpen}
                onClose={registerModal.onClose}
                title='Regsiter'
                actionLabel='continue'
                disabled= {isLoading}
                onSubmit={handleSubmit(onSubmit)}
                body={BodyContent}
                />
         )
}
 
export default RegisterModal;
