import Card from '../../components/Card/Card'
import { getMostRated } from './products/products'
import './Home.css'

export default async function Home() {
  const products = await getMostRated()

  return (
    <>
      <header>
        <h1>Fake Store API</h1>
      </header>
      <main>
        <section>
          <h2>Most Popular Products</h2>
          <article>
            {products.map((product) => (
              <Card
                imgSrc={product.image}
                title={product.title}
                subtitle={`$${product.price.toString()}`}
                description={product.description}
                href={`/products/${product.id}`}
                key={product.id}
              />
            ))}
          </article>
        </section>
      </main>
    </>
  )
}
