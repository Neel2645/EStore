import AddUser from "@/screens/users/add";

export default function AddUsers({searchParams}){
    return(
        <div>
            <h1> <AddUser searchParams={searchParams}/> </h1>
        </div>
    )
}