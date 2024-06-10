import CustomerFooter from "./componentes/CustomerFooter";
import CustomerNavbar from "./componentes/CustomerNavbar";


export default function CustomerLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div >
        <CustomerNavbar/>

        <div className="md:px-[200px] px-4 py-10">
           {children}
        </div>
        
      <CustomerFooter />
      </div>
    );
  }
  