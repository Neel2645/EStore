import { getUniqueUser } from "@/actions/userActions";
import EditUser from "@/screens/users/edit";

const EditUserPage = async ({params})=>{
    const {userId} = await params;
    const id = parseInt(userId);
    const userData = await getUniqueUser(id);
     return(
        <>
            <EditUser id={id} userData={userData}/>
        </>
    )
}

export default EditUserPage;