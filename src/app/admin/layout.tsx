import { useAuth } from "~/lib/hooks/useAuth";


const AdminLayout = ({ children }: {children:React.ReactNode}) => {
    useAuth();
    return (
        children
    )
}

export default AdminLayout;

