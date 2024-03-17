import { GridColDef } from '@mui/x-data-grid';
import Add from '../../components/add/Add';
import DataTable from '../../components/dataTable/DataTable';
import './product.scss';
import {useState} from 'react'
import { products } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
     field: "img", headerName:"Avatar", width:100,
     renderCell: (params)=>{
      return <img src={params.row.img} alt="" />
     }
  },
  
   
   {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Title",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "instock",
    headerName: "Instock",
    width: 150,
    type: "boolean",
  },
]
function Products() {
  const [open, setOpen] = useState(false)
  return (
    <div className="products">
       <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)} >Add New products</button>
       </div>
       <DataTable slug="products" columns={columns} rows={products} />
       {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products;