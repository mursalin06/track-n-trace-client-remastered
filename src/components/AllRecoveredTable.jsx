import React from 'react';

const AllRecoveredTable = ({ recoveredItem }) => {
    console.log(recoveredItem)

    const recoveryDate = recoveredItem.recoveryDate;
    const formattedDate = new Date(recoveryDate).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={recoveredItem.recoveredBy.image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {recoveredItem.recoveredBy.name}
            </td>
            <td>{recoveredItem.recoveredLocation}</td>
            <td>{formattedDate}</td>
        </tr>
    );
};

export default AllRecoveredTable;