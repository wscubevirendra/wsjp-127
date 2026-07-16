import StoreHero from "@/components/website/store/StoreHero";
import Container from "@/components/website/ui/Container";
import SortBar from "@/components/website/store/SortBar";
import FilterSidebar from "@website/store/FilterSidebar";


export default function Layout({ children }) {
    return (
        <Container className="mt-10">
            <StoreHero />
            <div className='w-full flex  gap-4 '>
                <div className='w-[280px] my-4'>
                    <FilterSidebar />
                </div>
                <div className='flex-1'>
                <SortBar/>
                    {children}
                </div>
            </div>
        </Container>


    )
}


