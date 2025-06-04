import React,{ memo, Fragment,useRef, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../../components/bootstrap/card";   
import { UserModel } from "@/api/User/UserModel";
import { getAllUsers } from "@/api/User/UserApi";

import { DataGrid, GridColDef } from '@mui/x-data-grid';


const UserList = memo(() => {
    const [listUsers, setListUsers] = useState<UserModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "email", headerName: "First name", width: 130 },
      { field: "username", headerName: "Last name", width: 130 },
    ];
    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const response = await getAllUsers();
            setListUsers(response.data.users);
        } catch (err: any) { 
            console.error('Failed to fetch users:', err);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
      fetchUsers()
    },[])
    const paginationModel = { page: 0, pageSize: 5 };
    return (
        <Fragment>
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">User List</h4>
                        </div>
                        </Card.Header>
                        <Card.Body className="px-0">
                            <div className="table-responsive">
                                <DataGrid
                                  rows={listUsers}
                                  columns={columns}
                                  initialState={{ pagination: { paginationModel } }}
                                  pageSizeOptions={[5, 10]}
                                  checkboxSelection
                                  sx={{ border: 0 }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
});

export default UserList
