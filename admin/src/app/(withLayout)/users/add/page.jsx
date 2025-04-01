import AddUser from "@/screens/users/add";

export default async function AddUsers({searchParams}){
    const {errorMessage} = await searchParams;
    return(
        <div>
            <h1> <AddUser errorMessage={errorMessage}/> </h1>
        </div>
    )
}