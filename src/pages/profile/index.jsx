
import React from 'react'
import { useParams } from 'react-router-dom'



export default function ProfilePage() {
  const {slug} = useParams()
  return (
    <> Profile Page - {slug}
    </>
  )
}


