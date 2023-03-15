import React, { Dispatch, SetStateAction, useState } from "react";

const CreateAndLoginField = () => {
  return (<div className="block items-center justify-between md:flex">
        <div>
          {/* Add functinoality here */}
          <button
            className="rounded-md bg-primary-500 px-10 py-2 text-white hover:bg-secondary-500"
            type="submit"
          >
            Create Account
          </button>
        </div>
        <div className="mt-4 md:mt-0">
          {/* Add functinoality here */}
          <a href="#" className="no-underline">
            Proceed to login.
          </a>
        </div>
      </div>
  )
}

export default CreateAndLoginField