/* eslint-disable react/prop-types */
import { Suspense } from "react"
import "./Loader.css"

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="loader"></div>
    </div>
  )
}

const SuspenseComponent = ({ children }) => {
  return <Suspense fallback={<Loading />}>
    {children}

  </Suspense>
}

export { Loading }
export default SuspenseComponent