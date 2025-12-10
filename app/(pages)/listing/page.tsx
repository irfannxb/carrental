import Banner from '../../../components/Banner'
import CarListing from '../../../components/CarListing'
const ListingPage = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return (
    <>
      <Banner />
      <CarListing />
    </>
  )
}

export default ListingPage