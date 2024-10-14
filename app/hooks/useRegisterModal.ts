//this a store for state managment of registerform 
"use client"
import { create } from "zustand";

interface registerModalStore{ //defining a methods 
         isOpen : boolean;
         onOpen :() => void
         onClose :() => void
}

const useRegisterModal = create <registerModalStore> ((set) => ({ //seting a methods 
         isOpen : true,
         onOpen:() => set({isOpen : true}),
         onClose:() => set({isOpen : false})
}))
4

export default useRegisterModal; 