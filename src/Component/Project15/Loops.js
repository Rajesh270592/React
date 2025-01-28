export const Loops = () => {
    const personData = [
        {
            name: "Rajesh",
            age: 31,
            emailId: "dkarajesh123@gmail.com",
            id: 1
        },
        {
            name: "Garvita",
            age: 2,
            emailId: "garvita@gmail.com",
            id: 2
        }, {
            name: "Sanvi",
            age: 1,
            emailId: "sanvi@gmail.com",
            id: 3
        }
    ]
    return (
        <>
            <h1>Hello</h1>
            <table border={1}>
                <thead><tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>emailId</td>


                </tr></thead>
                <tbody>
                    {
                        personData.map((user) => (

                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.emailId}</td>
                            </tr>

                        )
                        )
                    }


                </tbody>


            </table>
        </>
    )
}