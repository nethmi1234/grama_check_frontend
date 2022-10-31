import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "../App.css"
import Header from '../components/Header';



const Status = () => {

    const token = "eyJ4NXQiOiJNV1E1TldVd1lXWmlNbU16WlRJek16ZG1NekJoTVdNNFlqUXlNalZoTldNNE5qaGtNR1JtTnpGbE1HSTNaRGxtWW1Rek5tRXlNemhoWWpCaU5tWmhZdyIsImtpZCI6Ik1XUTVOV1V3WVdaaU1tTXpaVEl6TXpkbU16QmhNV000WWpReU1qVmhOV000Tmpoa01HUm1OekZsTUdJM1pEbG1ZbVF6Tm1FeU16aGhZakJpTm1aaFl3X1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwYTFhZTE5Mi05OTM1LTQwZjktYmRiZC04ZTYxODQ2ZTAwNjUiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6IndKRjN5N1haeElrVEVMS0lzVW5kbl9GbXgwMGEiLCJuYmYiOjE2NjY3ODA5MDcsImF6cCI6IndKRjN5N1haeElrVEVMS0lzVW5kbl9GbXgwMGEiLCJzY29wZSI6ImRlZmF1bHQiLCJvcmdhbml6YXRpb24iOnsidXVpZCI6IjAyZDdmMGI3LTBjMjUtNGUyZC05MmU1LTJlNWE0OWVkNWRjNyJ9LCJpc3MiOiJodHRwczpcL1wvc3RzLmNob3Jlby5kZXY6NDQzXC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjY2Nzg0NTA3LCJpYXQiOjE2NjY3ODA5MDcsImp0aSI6IjM3ODRjZGI1LTk2MTctNDliOS04OTA2LTQ3NGE1NDVlZGM3ZCJ9.MCXYR7Jh32Xk5YgBm3n2lkleaM7vEzaoTo_PCcso463N80Xe4TTGOUp0_IDBPHqsXROkUus3qgt8ECoT-2ykyVoLwVAbzuSx2jsPI_KXqMceF0HiiMcyVuw6qWR7UQZsj7FLeXxS8IDV9Q1ea8XCrF53mkYo_CM_6Z_jj0GtaouzayDCBUV5UJMb4BSguaDXeA0tKULc_BrMXHHG2AftL_MLtmjb_sG9CwMLnkD7Cs1UeJay_yzBCFBnqPw0O0aGS45aCsGcE9TesH_DI2wQTmg-TOuBxNO3kuRo9P7ofjfyOcbAdmnTBRGuGiBuAMLmf-gEoRXpzhszxO0KIl8IObzlFSVtQpgRlg9Hhs2J15ZH3Febq_4qbiVUpWkl3gYpQtRdL21vYT4sCPDcLnt9Sk4DqgqWCLD6Ms0djckdTq6ZTZkU7A2jWrVzDQi1rihB9OQRUtZ52jUdMxfyQQ3nceOKTCvVOQVgqb7LcrWZekD3l2Ce1y0aSKcYpLythnqNAC2Vsl4tkb5TlXDPe0f0VW6pKEq1vbT2b3JkY4zACeftcI_vXdvY3HcRDDQdb6qIcyqycMLJvA8OsLdOph02msWbCQgd9deViSm0eZYE1yrQgF8-W3sauJ4B9N_EDmXYxiKDKraV65Abl2yRn4g4r_hwa9kiKI27P0OgoaxKcl8";

    var config = {
        method: 'get',
        url: 'https://02d7f0b7-0c25-4e2d-92e5-2e5a49ed5dc7-prod.e1-us-east-azure.choreoapis.dev/wcso/policecheck/1.0.0/getResult/2',
        headers: {
            'Authorization': 'Bearer '+token
        }
    };
  

    const [status, setStatus] = React.useState("Pending");
    const [idCheck, setIdCheck] = React.useState(false);
    const [addressCheck, setAddressCheck] = React.useState(false);
    const [policeCheck, setPoliceCheck] = React.useState(false);

    React.useEffect(() => {
        // localStorage.setItem('token', );
        axios(config).then((response) => {
            console.log(response);
           
            if(response.data.id_check === true) setIdCheck(true);
            if(response.data.address_check === true) setAddressCheck(true);
            if(response.data.police_check === true) setPoliceCheck(true);
        });

        if(idCheck === true && addressCheck === true && policeCheck === true)
            setStatus("Completed")
        else
            setStatus("Rejected")

      }, [idCheck,addressCheck,policeCheck]);

   
    

    return ( 
        <div>
            <Header/>

        <div className="container">
            <div className="form">
                <h2 className="label">Your Grama certificate is <br></br><h1></h1>
                    {(status === "Rejected") ? <span className="badge-error">{status}</span> 
                                             : <span className="badge">{status}</span>}              
                </h2>
                <h2></h2>

                <div className="status">
                    
                    {(idCheck === true) ? <p> <CheckCircleOutlineIcon color="success"/> Your ID is correct</p> 
                                        : <p> <ErrorOutlineIcon color="error"/> Your ID is incorrect</p>}

                    {(addressCheck === true) ? <p> <CheckCircleOutlineIcon color="success"/> Your address is correct</p> 
                                            : <p> <ErrorOutlineIcon color="error"/> Your address is incorrect</p>}

                    {(policeCheck === true) ? <p> <CheckCircleOutlineIcon color="success"/> Your police result is correct</p> 
                                            : <p> <ErrorOutlineIcon color="error"/> Your police result has an issue</p>}
                </div>
                <br></br>
                <Link to="/user">Back to home</Link>
            </div>
            </div>
        </div>
    );
}
 
export default Status;