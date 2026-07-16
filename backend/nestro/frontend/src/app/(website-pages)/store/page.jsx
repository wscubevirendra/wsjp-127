
import { IconAdjustmentsHorizontal, IconX } from '@tabler/icons-react'
import ProductCard from '@website/ui/ProductCard'
import Pagination from '@website/store/Pagination'
import { fetchProduct } from '@/utils/api'


export default async function StorePage({ searchParams }) {
  const params=await searchParams
  const category=params.category || null;
  const room=params.room || null;
  const minPrice=params.min || null;
  const maxPrice=params.max || null
  const stock=params.stock || null
  const sort=params.sort || null
  const page=params.page || 1
  
  const products=await fetchProduct({ category, room,minPrice, maxPrice, stock,status:true,sort, page });
  
  return (
    <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
             {
              //check length of products.data and if it is 0 then show no products found
              products?.data.length === 0 ? (
                <div className="col-span-full text-center text-stone-500">
                  <IconX className="mx-auto mb-2 h-12 w-12" />
                  <p className="text-lg font-medium">No products found</p>
                </div>
              ) :
             products?.data.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            }
             </div>
             <Pagination pages={products?.pages || 1} />
             </>
  )
}

