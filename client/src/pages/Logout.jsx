import React, { useContext, useState } from 'react'
import { Button, Modal } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Logout = () => {
    const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };


//   use context 
const {logOut} = useContext(AuthContext);

  const hangleSignOut = () => {
    // console.log("sign out");
    logOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
  }
  return (
    <div className='h-screen flex items-center justify-center'>
        <Button onClick={() => props.setOpenModal('default')}>Click here to Logout</Button>
      <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The Act will be the primary statute governing the processing of individuals' digital personal data. Prior to the Act, there was no general data protection law in the country
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The Indian data protection landscape previously comprised of rules on sensitive personal data (i.e., Information Technology Act, 2000 ('the IT Act'), Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ('the SPDI Rules')), along with various sectoral regulations under regimes such as banking, telecom, insurance, and consumer protection. 
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/" onClick={hangleSignOut}><Button onClick={() => props.setOpenModal(undefined)}>Yes, I want to sign out!</Button></Link>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Logout