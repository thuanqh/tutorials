import Nav from "./components/Nav"
import { CustomerReviews, Footer, Hero, PolularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections"

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PolularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>

)

export default App