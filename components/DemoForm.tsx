'use client'

import { useState } from 'react'

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    industry: '',
    equipmentType: '',
    email: '',
    phone: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        organization: '',
        industry: '',
        equipmentType: '',
        email: '',
        phone: '',
      })
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-4xl mb-4">✓</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Thank you!
        </h3>
        <p className="text-gray-600">
          We've received your request. Our team will contact you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-juatek-blue focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-juatek-blue focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
            Industry *
          </label>
          <select
            id="industry"
            name="industry"
            required
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-juatek-blue focus:border-transparent"
          >
            <option value="">Select industry</option>
            <option value="industrial">Industrial</option>
            <option value="healthcare">Healthcare</option>
          </select>
        </div>
        <div>
          <label htmlFor="equipmentType" className="block text-sm font-medium text-gray-700 mb-2">
            Equipment Type *
          </label>
          <input
            type="text"
            id="equipmentType"
            name="equipmentType"
            required
            value={formData.equipmentType}
            onChange={handleChange}
            placeholder="e.g., Manufacturing machines, OCT devices"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-juatek-blue focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-juatek-blue focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-juatek-blue focus:border-transparent"
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full md:w-auto px-10 py-4 bg-juatek-blue text-white font-semibold rounded-lg hover:bg-juatek-blue-dark transition-colors text-lg shadow-lg hover:shadow-xl"
        >
          Submit Request
        </button>
      </div>
    </form>
  )
}
