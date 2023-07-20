import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Styles from "./index.module.css"

export default function Home() {
  return (
    <div className={Styles.homeWrapper}>
      <Navbar />
      <div className="">
        <div className="">
          <Card src="https://images.pexels.com/photos/397096/pexels-photo-397096.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Card src="https://images.pexels.com/photos/629162/pexels-photo-629162.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Card src="https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Card src="https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Card src="https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Card src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
      </div>
    </div>
  )
}
