import Navbar2 from "../components/Navbar2"
import Bill from "../components/Bill"
import Styles from "./index.module.css"

export default function Home() {
  return (
    <div className={Styles.homeWrapper}>
      <Navbar2 uid={10} />
      <div className="">
        <div className="">
          <Bill src="https://images.pexels.com/photos/397096/pexels-photo-397096.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Bill src="https://images.pexels.com/photos/629162/pexels-photo-629162.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Bill src="https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Bill src="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Bill src="https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Bill src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
        <form>
          <input type="number" placeholder="Enter Amount"></input>
          <button>
            <svg
              className="svg-icon"
              style={{
                verticalAlign: "middle",
                fill: "currentColor",
                overflow: "hidden",
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1008.00076 6.285714q18.857143 13.714286 15.428571 36.571429l-146.285714 877.714286q-2.857143 16.571429-18.285714 25.714285-8 4.571429-17.714286 4.571429-6.285714 0-13.714286-2.857143l-258.857142-105.714286-138.285715 168.571429q-10.285714 13.142857-28 13.142857-7.428571 0-12.571428-2.285714-10.857143-4-17.428572-13.428572T365.715046 987.428571v-199.428571l493.714285-605.142857-610.857142 528.571428-225.714286-92.571428q-21.142857-8-22.857143-31.428572-1.142857-22.857143 18.285714-33.714285L969.143617 5.142857q8.571429-5.142857 18.285714-5.142857 11.428571 0 20.571429 6.285714z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
