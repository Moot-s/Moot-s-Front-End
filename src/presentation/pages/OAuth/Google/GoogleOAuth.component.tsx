import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function GoogleOAuth() {
  const navigate = useNavigate()

  useEffect(() => {
    const fetchGoogleData = async () => {
      try {
        const res = await axios.get(`/api/auth/google/callback${location.search}`)
        const { jwt } = res.data

        localStorage.setItem('token', jwt)

        navigate('/')
      } catch (err) {
        console.error('Error en la autenticación con Google:', err)
      }
    }

    fetchGoogleData()
  })

  return <div>Redirigiendo...</div>
}
