import React from 'react';

import './index.scss';
import UserTableRow from './UserTableRow';

const UserTable = ({users}) => {
    // eslint-disable-next-line no-console
    console.log("users received in usertAble:::::", users);
    const getUserTableBody = () => {
        return users.map((object, index) => {
            return <UserTableRow user={object} key={index} />
        })
    } 

    return(
            <table className='responsive pr-3' data-pagination='true' data-click-to-select='true'>
                <thead className='table-header' style={{'color':'#2E363E'}}>
                    <tr>
                        <th>User Id</th>
                        <th>User Name</th>
                        <th>Path</th>
                        <th>Arn</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        getUserTableBody()
                    }
                </tbody>
            </table>
    );
}

export default UserTable;