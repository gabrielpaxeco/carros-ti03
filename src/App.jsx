import Sedans from "./components/Sedans"
import Suvs from "./components/Suvs"
import Luxuosos from "./components/Luxuosos"

export default function App() {
  return(
    <main className="py-20 px-6 min-h-svh bg-offwhitebgm antialiased lg:flex justify-center
    items-center ">
      <section className="lg:flex max-w-[920px]">
        <Sedans/>
        <Suvs/>
        <Luxuosos/>
      </section>
    </main>
  )
}