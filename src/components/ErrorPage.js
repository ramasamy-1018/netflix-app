import React from 'react'
import errorImage from "../assets/images/error page.png"

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
          <img
            className="object-cover h-full w-full"
            src={errorImage}
          />
        </div>
  )
}

export default ErrorPage