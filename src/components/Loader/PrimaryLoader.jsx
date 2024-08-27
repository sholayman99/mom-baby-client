import React from 'react';
import { useSelector } from 'react-redux';

const Primary = () => {
    const loader = useSelector((state)=>state.settings.loader);
    if(loader === "show"){
        return(
            <button className="btn btn-primary rounded-full w-full max-w-sm text-base-100 text-lg">
  <span className="loading loading-spinner"></span>
  loading
</button>
        )
    }else{
        return (
            <button
            onClick={onRegistration}
            className="bg-primary py-4 poppins-regular rounded-full hover:bg-secondary w-full max-w-sm text-base-100 text-lg"
          >
            Create
          </button>
        );
    };
    }
   

export default Primary;