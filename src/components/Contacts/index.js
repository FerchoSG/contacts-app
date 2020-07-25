import React from 'react';
import { Link } from 'wouter';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Contact = ({contact}) => {


    return (
        <tr>
            <th> {`${contact.firstName} ${contact.lastName}`} </th>
            <td>
                <Link className="btn btn-sm btn-info"
                    to={`/detail/${contact.id}`} >
                    More Details
                    <InfoOutlinedIcon className="ml-1" />
                </Link>
            </td>
        </tr>
    );
}

export default Contact;