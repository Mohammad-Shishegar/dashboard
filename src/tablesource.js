export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230 , renderCell: (params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.userName}
            </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'status', headerName: 'Status', width: 160 , renderCell : (params)=> {
        return (<div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>)
    }},
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   // valueGetter: (params) =>
    //   //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //   renderCell : (params) => {
    //     return(
    //       <>
    //         <span>{params.row.lastName}</span>
    //         <p>{params.row.age}</p>
    //       </>
    //     )
    //   }
    // },
  ];





export const dataRows = [
    { id: 1, email: 'aa@gmail.com', userName: 'Snow Jon',img : "https://images.pexels.com/photos/9423179/pexels-photo-9423179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",status:"active" ,  age: 35 },
    { id: 2, email: 'aa@gmail.com', userName: 'Lannister Cersei',img : "https://images.pexels.com/photos/9423179/pexels-photo-9423179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",status:"active" ,  age: 42 },
    { id: 3, email: 'aa@gmail.com', userName: 'Lannister Jaime',img : "https://images.pexels.com/photos/9423179/pexels-photo-9423179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",status:"active" ,  age: 45 },
    { id: 4, email: 'aa@gmail.com', userName: 'Stark Arya',img : "https://images.pexels.com/photos/9423179/pexels-photo-9423179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",status:"passive" ,  age: 16 },
    { id: 5, email: 'aa@gmail.com', userName: 'Targaryen Daenerys',img : "https://images.pexels.com/photos/9423179/pexels-photo-9423179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",status:"active" ,  age: 30 },
    { id: 6, email: 'aa@gmail.com', userName: "Melisandre",img : "https://images.pexels.com/photos/9423179/pexels-photo-9423179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",status:"pending" ,  age: 150 },
    { id: 7, email: 'aa@gmail.com', userName: 'Clifford Ferrara',img : "https://images.pexels.com/photos/9423179/pexels-photo-9423179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",status:"active" ,  age: 44 },
    { id: 8, email: 'aa@gmail.com', userName: 'Frances Rossini',img : "https://images.pexels.com/photos/9423179/pexels-photo-9423179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",status:"active" ,  age: 36 },
    { id: 9, email: 'aa@gmail.com', userName: 'Roxie Harvey',img : "https://images.pexels.com/photos/9423179/pexels-photo-9423179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",status:"passive" ,  age: 65 },
  ];