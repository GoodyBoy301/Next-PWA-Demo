import React from "react"
import Styles from "./Bill.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"

function Card({ src }) {
  const [className, setClassName] = useState("")
  useEffect(() => {
    const x =
      Math.random() > 0.5 ? Styles.Bill : Styles.Bill + " " + Styles.Right
    setClassName(x)
  }, [])

  if (className === "") return <></>
  return (
    <Link href="/home">
      <div className={className}>
        <div className={Styles.Transaction}>
          <div>
            <h1>17,500</h1>
            <h3>laundry</h3>
          </div>
        </div>
        <div className={Styles.Delivery}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2.40001V2.80001C12 2.85305 11.9789 2.90392 11.9414 2.94143C11.9039 2.97894 11.853 3.00001 11.8 3.00001H11.2V3.30001C11.2 3.46568 11.0657 3.60001 10.9 3.60001H1.1C0.934325 3.60001 0.8 3.46568 0.8 3.30001V3.00001H0.2C0.146957 3.00001 0.0960859 2.97894 0.0585786 2.94143C0.0210714 2.90392 0 2.85305 0 2.80001V2.40001C2.86036e-07 2.36044 0.011737 2.32176 0.033725 2.28887C0.0557131 2.25597 0.0869645 2.23034 0.123525 2.21521L5.92352 0.0152068C5.97249 -0.00506893 6.02751 -0.00506893 6.07647 0.0152068L11.8765 2.21521C11.913 2.23034 11.9443 2.25597 11.9663 2.28887C11.9883 2.32176 12 2.36044 12 2.40001ZM11.4 10H0.6C0.268625 10 0 10.2686 0 10.6V11C0 11.053 0.0210714 11.1039 0.0585786 11.1414C0.0960859 11.1789 0.146957 11.2 0.2 11.2H11.8C11.853 11.2 11.9039 11.1789 11.9414 11.1414C11.9789 11.1039 12 11.053 12 11V10.6C12 10.2686 11.7314 10 11.4 10ZM2 4.00001V8.80001H1.1C0.934325 8.80001 0.8 8.93433 0.8 9.10001V9.60001H11.2V9.10001C11.2 8.93433 11.0657 8.80001 10.9 8.80001H10V4.00001H8.4V8.80001H6.8V4.00001H5.2V8.80001H3.6V4.00001H2Z"
              fill="white"
            />
          </svg>
          <time>received・11/02/2023</time>
        </div>
      </div>
    </Link>
  )
}

export default Card
