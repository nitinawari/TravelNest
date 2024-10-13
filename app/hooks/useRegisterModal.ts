import { create } from "zustand";

interface registerModalStore{
         isOpen : boolean;
         onOpen :() => void
         onClose :() => void
}

const useRegisterModal = create <registerModalStore> ((set) => ({
         isOpen : false,
         onOpen:() => set({isOpen : true}),
         onClose:() => set({isOpen : true})
}))
4

export default useRegisterModal;