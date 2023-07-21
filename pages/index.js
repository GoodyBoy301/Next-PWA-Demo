import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Styles from "./index.module.css"

export default function Home() {
  return (
    <div className={Styles.homeWrapper}>
      <Navbar />
      <div className="">
        <div className="">
          <Card uid={0} />
          <Card uid={1} />
          <Card uid={2} />
          <Card uid={3} />
          <Card uid={4} />
          <Card uid={5} />
          <Card uid={6} />
          <Card uid={7} />
          <Card uid={8} />
          <Card uid={9} />
          <Card uid={10} />
        </div>
      </div>
    </div>
  )
}
