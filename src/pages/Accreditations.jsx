import React from 'react'
import accBanner from '../assets/accreditations/acc-banner.jpg'

const Accreditations = () => {
  // Accreditation rows and their downloadable files (when available)
  const items = [
    {
      text: 'ISO 9001: Quality Management System',
      file: '/src/assets/accreditations/downloadFiles/SRF ISO CERTICATE.pdf',
    },
    {
      text: 'Chamber of Commerce Certificate - Sharjah Government',
      file: '/src/assets/accreditations/downloadFiles/Document_2025-10-06_140657.pdf',
    },
    {
      text: 'Registration for Precursors & Chemicals End User (MOHAP)',
      file: '/src/assets/accreditations/downloadFiles/RegistrationCertificate_5456.pdf',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
        <section className="relative bg-cover bg-center bg-no-repeat h-[520px]" 
          style={{ backgroundImage: `url(${accBanner})` }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 flex items-end justify-start max-w-2xl h-full">
            <div className="text-white max-w-6xl p-20">
                <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight font-['Product_Sans']">
                Accreditations.
                </h1>
                <p>We are dedicated to providing exceptional service to our customers, and our accreditations and certifications stand as a testament to this commitment.</p>
            </div>
          </div>
        </section>
        {/* Accreditations List */}
        <section className="py-16 bg-[#F7F7F7]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex gap-4 relative">
              {/* Rotated CERTIFICATES Heading */}
              <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center justify-center" style={{ width: '60px', height: '500px' }}>
                  <h2 
                    className="text-lg md:text-6xl font-bold font-['Product_Sans'] whitespace-nowrap tracking-widest" 
                    style={{ 
                      transform: 'rotate(-90deg)',
                      transformOrigin: 'center',
                      color: '#FFECC5',
                      letterSpacing: '0.15em',
                    }}
                  >
                    CERTIFICATES
                  </h2>
                </div>
              </div>
              
              <div className="flex-1 overflow-x-auto">
                <table className="w-full border-separate [border-spacing:0_12px]">
                  <tbody>
                    {items.map((item, i) => (
                      <tr key={i} className="bg-white">
                        <td className="w-3/4 px-6 py-4 align-middle">
                          <div className="flex items-start gap-3">
                           
                            <span className="text-sm sm:text-base text-gray-900">{item.text}</span>
                          </div>
                        </td>
                        <td className="w-1/4 px-6 py-4 text-right align-middle">
                          {item.file ? (
                            <a
                              href={item.file}
                              download
                              className="inline-flex items-center gap-2 rounded-full bg-[#DCBC7C] text-black text-sm px-4 py-2 hover:opacity-90"
                            >
                              Download
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M12 3.75a.75.75 0 0 1 .75.75v9.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L7.72 12.28a.75.75 0 1 1 1.06-1.06l2.47 2.47V4.5a.75.75 0 0 1 .75-.75Z"/>
                                <path d="M3.75 15.75a.75.75 0 0 1 .75.75v1.5A1.5 1.5 0 0 0 6 19.5h12a1.5 1.5 0 0 0 1.5-1.5v-1.5a.75.75 0 0 1 1.5 0v1.5A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3v-1.5a.75.75 0 0 1 .75-.75Z"/>
                              </svg>
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-2 rounded-full bg-gray-200 text-gray-500 text-sm px-4 py-2 cursor-not-allowed select-none">
                              No file
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
    </div>
  )
}

export default Accreditations