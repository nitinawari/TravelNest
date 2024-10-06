import Container  from "@/app/components/Container"
import Logo from "@/app/components/navbar/Logo"


export const Navbar = () =>{
         return(
                  <div className="fixed w-full border-2 right-1 ">
                           i am navbar 
                           <Container>
                                    i am conatainer
                                    <Logo />
                           </Container>

                  </div>
         )
}