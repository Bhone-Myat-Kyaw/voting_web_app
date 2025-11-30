import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'
import { getWithExpiry } from '../../helpers/storage'

type Props = {
    children: JSX.Element,
}

const ProtectedRoute = ({children}: Props) => {
    const stored = getWithExpiry("voter");
    if (!stored) {
        return <Navigate to={'/login'} replace />
    }
    return children;
  
}

export default ProtectedRoute