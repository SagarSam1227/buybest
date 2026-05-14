import Header from '../components/Home/Header'
import ProductSection from '../components/Home/ProductSection'

const Home = () => {
  return (
    <div className='w-full min-h-[200vh]'>
      <div className='w-full sticky -top-16 h-screen bg-linear-to-r from-[#a25100] via-[#e27508] to-[#f68617]'>
        
       <Header />
       <ProductSection />
      </div>

    </div>
    )
}

export default Home
