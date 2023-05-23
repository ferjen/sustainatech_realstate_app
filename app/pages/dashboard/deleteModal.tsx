'use client'

import { useState } from "react";
import { PostConcern } from "./concernForm";

interface ConcernModalProps {
  id: string;
  email: string;
}

const ConcernModal = ({ id, email }: ConcernModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    <div>
         
    </div>
      <button
        data-modal-target="staticModal"
        data-modal-toggle="staticModal"
        className="block text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleModal}
      >
        Send Concern
      </button>

      {isModalOpen && (
        <div
          id="staticModal"
          data-modal-backdrop="static"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center"
        >
          <div className="relative bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Concern Form</h3>
            <PostConcern id={id} email={email} /> {/* Pass id and email as props */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConcernModal;
