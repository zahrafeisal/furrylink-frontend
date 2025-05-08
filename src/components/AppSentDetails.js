import React from "react";
import { useLocation } from "react-router";
import Navbar from "./Navbar";

function AppSentDetails({ user }) {
    const location = useLocation()
    const application = location.state?.app

    if (!application) {
        return <p>No application data available.</p>;
    }

    return (
        <>
        <Navbar user={user} />
        <div className="appDetails poppins-regular">
            <h2>Application Details</h2>
            <div className="card"
              style={{
                border: '1px solid black',
                margin: '10px',
                padding: '5px',
                marginLeft: '300px',
                marginRight: '300px'
              }}
            >
                <div className="card-header">
                    To: 
                    <i className="fa-solid fa-envelope" style={{color: '#999', paddingRight: '5px', paddingLeft: '10px'}}></i>
                    {application?.pet?.user?.email} {' '}
                    ({application?.pet.user?.animal_shelter
                        ? `${application.pet.user.organization_name ?? 'N/A'}`
                        : `${application?.pet.user?.first_name ?? ''} ${application?.pet.user?.last_name ?? ''}`.trim()
                    })
                </div>
                <div className="card-body">
                    <div className='appImg'>
                        <img src={`https://furrylink-backend.onrender.com/uploads/${application.pet.image_filename}`} alt={application.pet.breed} />
                    </div>
                    <h4 style={{paddingBottom: '10px', paddingTop: '10px'}} className='card-title'>{application.pet?.breed ?? 'N/A'} ({application.pet?.type ?? 'N/A'})</h4>
                    <p><strong>Age: </strong>{application.pet.age} yrs.</p>
                    <p><strong>Price: </strong>Ksh. {application.pet.price}</p>
                    <div>
                        <p className="card-text"><strong>Description</strong></p>
                        <small className="card-text">{application.description ?? 'N/A'}</small>
                    </div>
                </div>
                <div className="card-footer">
                    {application.status === 'Approved' && <p className='card-text'><small>Status:</small><small style={{color: 'green'}}> {application.status}</small></p>}
                    {application.status === 'Rejected' && <p className='card-text'><small>Status:</small><small style={{color: 'red'}}> {application.status}</small></p>}
                    {application.status === 'Pending' && <p className='card-text'><small>Status:</small><small style={{color: '#999'}}> {application.status}</small></p>}
                </div>
            </div>
        </div>
        </>
    );
}

export default AppSentDetails;