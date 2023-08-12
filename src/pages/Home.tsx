import { useEffect } from "react";
import { get_products } from "../api/products";
import { useInfiniteQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast"; 
import { useInView } from 'react-intersection-observer';
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { Product } from "../Interfaces";

const Home = () => {

  const { ref, inView } = useInView();

    const {
        data,
        isLoading,
        error,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(["products"], get_products, {
        getNextPageParam: (page: any) => page.meta.next,
    });

    console.log(data);

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);

    if (isLoading) return <Loader />;
    if (error instanceof Error) return <>{toast.error(error.message)}</>;

    return (
        <>
            {data?.pages[0].data.map((product: Product) => (
                <>
                    <div className="flex justify-center">
                        <div key={product.id} className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">

                            
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    //page={"home"}
                                />
                           
                        </div>
                    </div>

                    {!isLoading && data?.pages.length === 0 && (
                        <p className="text-xl text-slate-800 dark:text-slate-200">
                            No more results
                        </p>
                    )}
                    {/* Esto tiene algun error que hace un infinityScroll repitiendo productos ya cargados
                    !isLoading &&
                        data?.pages?.length !== undefined &&
                        data.pages.length > 0 &&
                        hasNextPage && (
                            <div ref={ref}>
                                {isLoading || isFetchingNextPage ? (
                                    <Loader />
                                ) : null}
                            </div>
                                )*/}
                </>
            ))}
        </>
    );
};

export default Home