import React from 'react'
import { useRouter } from 'next/router'

export default function ExitPreviewButton({ children }) {
  const { isPreview } = useRouter()
  return (
    <div>
      {children}
      {isPreview ? (
        <a className="exit-button" href="/api/exit-preview">
          Exit Preview
        </a>
      ) : null}
      <style jsx>{`
        .exit-button {
          color: #fff;
          position: fixed;
          bottom: 0px;
          right: 60px;
          background-color: #262629;
          display: inline-flex;
          min-width: 120px;
          margin-right: 20px;
          margin-bottom: 20px;
          padding: 10px 20px;
          box-sizing: border-box;
          align-items: baseline;
          justify-content: center;
          font-size: 14px;
          line-height: 17px;
          font-weight: bolder;
          text-decoration: none;
          border: 1px solid #262629;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
